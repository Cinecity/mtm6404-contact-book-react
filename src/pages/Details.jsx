import { useEffect, useState } from "react";
import db from "../utils/db";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import { EditForm } from "../components/EditForm";

export const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState({});

    const fetchContactById = async (contactId) => {
        const docRef = doc(db, "contacts", contactId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
            setContact({
                id: docSnapshot.id,
                ...docSnapshot.data()
            });
        } else {
            console.log('Document does not exist!');
            return null;
        }
    };

    const handleUpdate = async (updatedContact) => {
        try {
            const docRef = doc(db, "contacts", id);
            await updateDoc(docRef, updatedContact);
            navigate('/');
        } catch (error) {
            console.log("Error updating contact!", error);
        }
    };

    const handleContactDelete = async () => {
        const msg = "Are you sure you want to delete?";
        try {
            if (confirm(msg)) {
                const docRef = doc(db, "contacts", id);
                await deleteDoc(docRef);
                setContact({});
                navigate('/');
            } else {
                navigate(0); 
            }
        } catch (error) {
            console.log("Error deleting contact!", error);
        }
    };

    const handleBack = () => {
        navigate('/');
    };

    useEffect(() => {
        fetchContactById(id);
    }, [id]);

    const DeleteButton = () => {
        return (
            <button onClick={handleContactDelete}>Delete Contact</button>
        );
    };

    return (
        <div className="edit-form">
        {contact ? (
            <>
                <button onClick={handleBack}>Back to Contacts</button>
                <EditForm contact={contact} onUpdate={handleUpdate} />
                <button className="delete" onClick={handleContactDelete}>Delete Contact</button>
            </>
        ) : (
            <div>
                <p>Loading contact details...</p>
                <button onClick={handleBack}>Back to Contacts</button>
            </div>
        )}
    </div>
    
    );
};
