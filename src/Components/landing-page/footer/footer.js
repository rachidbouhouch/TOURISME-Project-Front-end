
function footer() {
    let menuBar = document.querySelector('#menuBar')
    let mobileMenu = document.querySelector('#mobileMenu')
    let closeMenu = document.querySelector('#closeMenu')

    menuBar.addEventListener('click', function () {
        mobileMenu.classList.remove('hidden')
    })

    closeMenu.addEventListener('click', function () {
        mobileMenu.classList.add('hidden')
    })
    return (
        <div className="bg-gray-800 py-4">
        <div className="container flex items-center justify-between">
            <div className="space-y-8 xl:col-span-1">
                <img className="w-20" src="images/logoBlanche.png" alt="Company name" />
            </div>
            <div className="flex space-x-6">
                <a href="##" className="text-gray-400 hover:text-gray-500">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="##" className="text-gray-400 hover:text-gray-500">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="##" className="text-gray-400 hover:text-gray-500">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="##" className="text-gray-400 hover:text-gray-500">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    </div>
    );
  }
  
  export default footer;
  