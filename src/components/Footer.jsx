const Footer = () =>  {

return (

    <div>
        <footer class="bg-gray-800 text-white py-10">
  <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    
    
    <div class="mb-4 md:mb-0 text-gray-400">
      <ul class="flex space-x-6 text-sm ">
        <li><a href="#" class="hover:underline">Accueil</a></li>
        <li><a href="#" class="hover:underline">À propos</a></li>
        <li><a href="#" class="hover:underline">Services</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
      </ul>
    </div>

   
    <div>
      <a href="https://facebook.com" target="_blank" class="text-blue-400 hover:text-blue-600 transition">
        Facebook
      </a>
    </div>
  </div>

  <div class="text-center text-sm text-gray-400 mt-6">
    © 2025 Joel Dev. Tous droits réservés.
  </div>
</footer>

    </div>
)

}
export default Footer