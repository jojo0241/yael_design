import React from "react"
import { motion } from "framer-motion";


const Home = () => {

    return (
 <>
   <section class="container  p-10 px-8 py-5">

  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
<motion.div
        className="max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div class="bg-transparent p-6 px-2 py-10">
      <h2 class="text-6xl font-Montserrat font-bold mb-5 tracking-tight text-green-500 ">Offrez une fête d'anniversaire Personnalisée avec Yael design</h2>
      <p class=" py-1">Etiquettes eau, flacons de jus, sacs cadeaux, bâches numériques et bien d'autres personnalisés avec de magnifiques thèmes !</p>
      <br /><button
        type="submit"
        className="w-50 bg-gray-800 text-white py-5 rounded-3xl"
      >
        Nous Contacter
      </button>

    </div>

      </motion.div>
    
<motion.div
        className="max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      ><div class="bg-white p-3 py-6 ">
     <img src="yael.png" alt="" height={580} width={1157} />
    </div></motion.div>
    
  </div>
</section><br />



<div class="w-full h-100 bg-blue-400 text-white p-3 rounded items-center">

    <h2 class="text-2xl text-center p-6 py-11 font-bold items-center">Quelques uns de nos produits</h2>

     <div id="carousel" class="overflow-x-auto whitespace-nowrap scroll-smooth px-15 py-1 flex justify-center">
      <div class=" w-50 h-50 rounded-full shadow-md mr-10  ">
        <img src="et1.jpg" alt="" class="w-60 h-50 rounded-full " />
      </div>
      <div class="w-50 h-50 rounded-full shadow-md mr-10  ">
        <img src="TT.jpg" alt="" class="w-60 h-50 rounded-full " />
        
      </div>
      <div class=" w-50 h-50 rounded-full shadow-md mr-10  ">
        <img src="sacos.jpg" alt="" class="w-60 h-50 rounded-full " />
        
      </div>
      <div class=" w-50 h-50 rounded-full shadow-md mr-10  ">
        <img src="hey2.jpg" alt="" class="w-60 h-50 rounded-full " />
       
      </div>
      
    </div>
    
</div><br /><br />

<div class="w-full h-100 bg-yellow-400 text-white p-3 rounded items-center">

    <h2 class="text-2xl text-center p-6 py-11 font-bold items-center">Quelques Thèmes Disney</h2>

     <div id="carousel" class="overflow-x-auto whitespace-nowrap scroll-smooth px-15 py-1 flex justify-center">
      <div class=" w-50 h-50 rounded-full shadow-md mr-10 p-1 px-6 bg-yellow-200 ">
        <img src="pat.png" alt="" height={150} width={150} class=""/>
      </div>
      <div class="w-50 h-50 rounded-full shadow-md mr-10 p-1 px-6 bg-yellow-200">
        <img src="mick.png" alt="" height={140} width={140} class=""/>
      </div>
      <div class=" w-50 h-50 rounded-full shadow-md mr-10 p-1 px-6 py-12 bg-yellow-200">
        <img src="cars.png" alt="" height={500} width={500} class=""/>
      </div>
      <div class=" w-50 h-50 rounded-full shadow-md mr-10 p-1 px-6 py-5 bg-yellow-200">
       <img src="ours.png" alt="" height={200} width={200} class=""/>
      </div>
      
    </div>
    
</div><br />

<section>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div class="py-25 p-6 mx-8">
         <h4 class="text-6xl font-bold text-green-400">
        Besoin d'une personnalisation spéciale ?
         </h4>
          <h4 class="text-2xl text-gray-500 py-10">
        Donnez nous la personnalisation idéale pour votre cérémonie via ce formulaire...
         </h4>
        
  </div>
  
  <div>
<form
      className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto py-15"
    >
    
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">Nom à personnaliser</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="nom"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">Choisissez votre Thème</label>
        
        <select name="" id="" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">

        <option value="Cars">Cars</option>
        <option value="Cars">Masha & Misha </option>
        <option value="Cars">Mickey</option>
        <option value="Cars">Princesses</option>
        <option value="Cars">Paw</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Votre message..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Soumettre
      </button>
    </form>
  </div>

</div>

</section><br />

<section>

<div class="w-full h-auto bg-yellow-400 text-white p-2 px-6 rounded items-center">

<h2 class="text-xl text-center p-6 py-9  font-bold items-center">Avez vous d'autres préocupations ?<br />

  <div class="font-normal text-3xl m-2">N'hesitez pas à nous contacter</div>

  <center>
  <button
        type="submit"
        className="w-60 bg-green-500 text-white m-4 px-9"
      >
        Nous Contacter
      </button>
  </center>
</h2>




</div>



</section>











   </>

    )
  




}

export default Home;