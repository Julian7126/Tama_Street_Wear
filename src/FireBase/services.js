import { addDoc, collection } from "firebase/firestore";
import characters from "./character.json";
import { db } from "./config";

const saveProductsFirebase = async () => {

    try {    
        //
        characters.forEach(async (character) => {
            const docRef = await addDoc(collection(db, "products"), {
                name: character.name,
                species: character.species,
                image: character.image,
                status: character.status,
                gender: character.gender,
                origin: character.origin,
            });
            console.log("Document written with ID: ", docRef.id);
        })
        
    } catch (error) {
        console.log(error)
    }
}

export default saveProductsFirebase;