import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { uploadProductPhoto } from "../../firebase";
import "./AddProduct.css";
import { addDoc } from "firebase/firestore";






export default function AddProduct ({ categoty }) {
const { user } = useContext(AppContext);
const [name, setName] = useState("");
const [price, setPrice] = useState(0);
const [picture, setPicture] = useState(null);
const [description, setDescription] = useState("");
const [isSubmitting, stIsSubmitting,] = useState(false);

if (!user || !user.isAdmin){
    return null;
}

function onChangeName(event) {
    setName(event.target.value);
}

function onChangePrice(event) {
    setPrice(event.target.value);
}


function onChangePicture(event) {
    setPrice(event.target.value);
}

function onChangePicture(event) {
  const file = event.target.files[0];
  setPicture(file);
}
function onChangeDescription(event) {
   
    setDescription(event.target.value);
  }

  function onFormSubmit(event){
    event.preventDefault();
    if (!picture) {
        alert("Please upload an picture");
        return;
    }

    setIsSubmiting (true);
    uploadProductPhoto(picture)
    .then((pictureUrl) =>
        addDoc(productsCollection, {
            category: category.id,
            name: name,
            price: Number(price),
            picture:pictureUrl,
            description: description,
            slug: name.replaceAll(" ", "-").toLowerCase(),
        })
    )
    .then(() => {
        setName("");
        setPrice(0.0);
        setPicture(null);
        setDescription("");
    })

    .catch((error) =>{
        console.log("Failed to add product:", error);
    })

    .finally(() => {
        setIsSubmitting(false);
    });

  }

  return (
    <div className="AddProduct">
        <form onSubmit={onFormSubmit}>
            <h3>Create a new product</h3>
            <label>
                Name:
            </label>
        </form>
    </div>
  )
}