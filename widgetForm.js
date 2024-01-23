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

        #openModal {
            width: 60px;
            height: 60px;
            border-radius: 50%; 
            box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px; 
            position: fixed; 
            bottom: 20px; 
            right: 20px; 
            cursor: pointer;
            z-index: 2; 
        }

        .openModal-fixed-circle {
            background-color: var(--color1) !important;
            border-radius: 50%;
            padding: 18px;
            height: 60px;
            width: 60px;
            position: fixed; 
            bottom: 20px; 
            right: 20px;
            color: #1f1f1f !important;
            box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
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
        }

        .openModal-fixed-circle-icon:hover {
          color: #ffffff !important;
        }

        .copenModal-fixed-circle-icon:hover a {
          color:  #1f1f1f !important;
        }

        </style>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cdlckrs/tdm@406dc861e74cff12438d2ac42850d3a0e47e2c29/cL-icons-themify-tdm.css" />

        <div><a class="openModal-fixed-circle" id="openModal" alt="&#63;" style="cursor:pointer;"><i class="openModal-fixed-circle-icon ti-comment"></i></a></div>
        
    <div id="customDynamicModal" class="modal">
        <div class="modalContent">
            <span class="closeButton">&times;</span>
            <div id="formContainer"></div>
        </div>
    </div>
    `;

    // Inject the modal HTML into the page
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Identify the modal and other elements
    var modal = document.getElementById('customDynamicModal');
    var div = document.getElementById("openModal");
    var closeButton = document.getElementsByClassName("closeButton")[0];

    // Open modal event
    div.onclick = function() {
        modal.style.display = "block";
        // Dynamically set the FORM ID
        setFormId();
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

    // Function to set the FORM ID
    function setFormId() {
        // Get the original embedding element by its ID
        var embeddingElement = document.getElementById('widgetForm');
        // Retrieve the data-form-slug attribute
        var formSlug = embeddingElement.getAttribute('data-form-slug');

        // Set the FORM ID to the formContainer
        var formContainer = document.getElementById('formContainer');
        if (formContainer && formSlug) {
            formContainer.setAttribute('data-form-id', formSlug);
        }
    }
});

// Append the FORM (paperform) script to the body
(function() {
    var script = document.createElement('script');
    script.src = "https://paperform.co/__embed.min.js";
    document.body.appendChild(script);
})();
