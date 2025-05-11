import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import useAxiosSecure from '../hook/useAxiosSecure';
import toast from 'react-hot-toast';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign In User
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Google Login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Sign Out
    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            await axiosSecure.post('/log_out');
        } catch (error) {
            toast.error('Logout failed');
            console.error('Logout Error:', error);
        } finally {
            setLoading(false);
        }
    };

    // Update User Profile
    const updateUserProfile = async (name, photo) => {
        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            });
            // Optional: Update local state with new info
            setUser({ ...auth.currentUser });
            // toast.success("Profile updated");
        } catch (error) {
            toast.error("Profile update failed");
            console.error("Profile Update Error:", error);
        }
    };

    // Observe auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            console.log(currentUser ? '🟢 Online' : '🔴 Offline', currentUser);
            try {
                if (currentUser?.email) {
                    await axiosSecure.post('/jwt', { email: currentUser.email });
                } else {
                    await axiosSecure.post('/log_out'); // log out backend session if any
                }
            } catch (err) {
                toast.error(err?.message || 'Auth error');
                console.error('JWT Error:', err);
            }
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [axiosSecure]);

    const authInfo = { user, setUser, loading, createUser, signInUser, googleLogin, logOut, updateUserProfile };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;