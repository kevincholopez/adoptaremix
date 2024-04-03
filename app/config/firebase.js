import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB4Ft8DBT77nv8FTPFWFxie1Mq6zSmVkFs",
    authDomain: "adopta-la-plata.firebaseapp.com",
    projectId: "adopta-la-plata",
    storageBucket: "adopta-la-plata.appspot.com",
    messagingSenderId: "1560736140",
    appId: "1:1560736140:web:87cc8efa974d6f7e4126a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadfile(file, name) {
    const storageRef = ref(storage, `${name}`)
    await uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    })
    return await getDownloadURL(storageRef)
}