document.addEventListener('DOMContentLoaded', function() {
    // Define the modal HTML with a unique container for the form
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
            background-color: rgba(255, 255, 255, 0.5) !important;
        }

        .modalContent {
            background-color: #ffffff !important;
            margin: 15% auto; 
            padding: 20px;
            border: 1px solid #ffffff;
            width: 80%;
            border-radius: 20px !important;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px !important;
        }

        .modalContent iframe {
            width: calc(100% - 40px);
            height: calc(100% - 40px); 
            border: none !important; 
            padding: 20px; 
            box-sizing: border-box; 
        }

        .closeButton {
            color: #1f1f1f !important;
            float: right;
            font-size: 24px !important;
            font-weight: normal;
            position: relative !important;
            z-index: 10 !important;
        }

        .closeButton:hover,
        .closeButton:focus {
            color: #1f1f1f !important;
            text-decoration: none !important;
            cursor: pointer;
        }

        #openModal {
            width: 24px;
            height: 24px;
            border-radius: 50%;  
            position: fixed; 
            bottom: 20px; 
            right: 20px; 
            cursor: pointer;
            z-index: 2; 
        }

        .openModal-fixed-circle {
            background-color: var(--color1) !important;
            border-radius: 50% !important;
            height: 60px;
            width: 60px;
            padding: 18px;
            position: fixed; 
            bottom: 20px; 
            right: 20px;
            color: #1f1f1f !important;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px !important;
            z-index: 3 !important;
            margin-bottom: 5px !important;
        }

        .openModal-fixed-circle-icon {
            font-size: 24px !important;
            color: #1f1f1f !important;
            line-height: normal !important;
            vertical-align: middle !important; 
            text-align: center !important;
            display: inline-block !important;
            text-decoration: none !important;
        }

        .openModal-fixed-circle-icon:hover {
          color: #1f1f1f !important;
          text-decoration: none !important;
        }

        .copenModal-fixed-circle-icon:hover a {
          color:  #1f1f1f !important;
          text-decoration: none !important;
        }

        </style>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cdlckrs/tdm@406dc861e74cff12438d2ac42850d3a0e47e2c29/cL-icons-themify-tdm.css" />

        <a class="openModal-fixed-circle" id="openModal" alt="&#63;" style="cursor:pointer;"><i class="openModal-fixed-circle-icon ti-comment"></i></a>
        
        <div id="customDynamicModal" class="modal">
            <div class="modalContent">
                <span class="closeButton">&times;</span>
                    <div id="formContainer">

                        <div data-paperform-id="w3bjtuop"></div>

                    </div>
            </div>
        </div>
    `;

    // Inject the modal HTML into the page
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Identify the modal and other elements
    var modal = document.getElementById('customDynamicModal');
    var showModal = document.getElementById("openModal");
    var closeButton = document.getElementsByClassName("closeButton")[0];

    // Open modal event
    showModal.onclick = function() {
        modal.style.display = "block";
    };

    // Close modal events
    closeButton.onclick = function() {
        modal.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

});

// Append the FORM (paperform) script to the body
(function() {
    var script = document.createElement('script');
    script.src = "https://paperform.co/__embed.min.js";
    document.body.appendChild(script);
})();




