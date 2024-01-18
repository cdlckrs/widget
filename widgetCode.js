document.addEventListener('DOMContentLoaded', function() {
    var modalHTML = `

    <style type="text/css">

        .modal {
            display: none; 
            position: fixed; 
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto; 
            background-color: #ffffff !important; 
            background-color: rgba(255,255,255,0.5) !important;
        }

        .modalContent {
            background-color: #ffffff !important;
            margin: 15% auto; 
            padding: 20px;
            border: 1px solid #ffffff;
            width: 80%;
            border-radius: 20px !important;
        }

        .modalContent iframe {
            width: calc(100% - 40px);
            height: calc(100% - 40px); 
            border: none; 
            padding: 20px; 
            box-sizing: border-box; 
        }

        .closeButton {
            color: #1f1f1f;
            float: right;
            font-size: 24px;
            font-weight: normal;
            position: relative !important;
            z-index: 10 !important;
        }

        .closeButton:hover,
        .closeButton:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }

        #openModalImage {
            width: 80px;
            height: 80px;
            border-radius: 50%; 
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5); 
            position: fixed; 
            bottom: 20px; 
            left: 20px; 
            cursor: pointer;
            z-index: 2; 
        }


        </style>
        
        <img src="your-image-url.jpg" id="openModalImage" alt="&#63;" style="cursor:pointer;">

        
        <div id="customModal" class="modal">

        <div class="modalContent">
                <span class="closeButton">&times;</span>
                <div id="formContainer" data-paperform-id=""></div>
        </div>

    </div>


    `; // END of our modal HTML string

    // Inject the modal HTML
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Get the modal element and other elements
    var modal = document.getElementById('customModal');
    var img = document.getElementById("openModalImage");
    var closeButton = document.getElementsByClassName("closeButton")[0];

    // Event listeners for opening and closing the modal
    img.onclick = function() {
        modal.style.display = "block";
    };

    closeButton.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Dynamically set the Paperform
    var formSlug = modal.getAttribute('data-paperform-slug');
    var formContainer = document.getElementById('formContainer');
    if (formContainer && formSlug) {
        formContainer.setAttribute('data-paperform-id', formSlug);
    }
});

// Append Paperform script to body
(function() {
    var script = document.createElement('script');
    script.src = "https://paperform.co/__embed.min.js";
    document.body.appendChild(script);
})();
