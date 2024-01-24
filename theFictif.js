document.addEventListener('DOMContentLoaded', function() {
    // Define the modal HTML with a unique container for the form
    var modalHTML = `
    <style type="text/css">

        .widgetModal {
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

        .widgetModalContent {
            background-color: #ffffff !important;
            margin-top: 45px !important;
            margin-bottom: 15px !important;
            margin-right: auto;
            margin-left: auto; 
            padding: 20px !important;
            border: none !important;
            width: 80%;
            border-radius: 20px !important;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px !important;
        }

        .widgetModalContent iframe {
            width: calc(100% - 40px);
            height: calc(100% - 40px); 
            border: none !important; 
            padding: 20px; 
            box-sizing: border-box; 
        }

        .widgetCloseButton {
            color: #1f1f1f !important;
            float: right;
            font-size: 24px !important;
            font-weight: normal;
            position: relative !important;
            z-index: 10 !important;
        }

        .widgetCloseButton:hover,
        .closeButton:focus {
            color: #1f1f1f !important;
            text-decoration: none !important;
            cursor: pointer;
        }

        #widgetOpenModal {
            width: 60px;
            height: 60px;
            border-radius: 50%;  
            position: fixed; 
            bottom: 20px; 
            right: 20px; 
            cursor: pointer;
            z-index: 2; 
        }

        .widget-openModal-fixed-circle {
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

        .widget-openModal-fixed-circle-icon {
            font-size: 24px !important;
            color: #1f1f1f !important;
            line-height: normal !important;
            vertical-align: middle !important; 
            text-align: center !important;
            display: inline-block !important;
            text-decoration: none !important;
        }

        .widget-openModal-fixed-circle-icon:hover {
          color: #1f1f1f !important;
          text-decoration: none !important;
        }

        .widget-openModal-fixed-circle-icon:hover a {
          color:  #1f1f1f !important;
          text-decoration: none !important;
        }

        .widgetModal::-webkit-scrollbar {
            display: none !important;
        }

        .widgetModal {
            -ms-overflow-style: none !important;
            scrollbar-width: none !important;
        }

        </style>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cdlckrs/tdm@406dc861e74cff12438d2ac42850d3a0e47e2c29/cL-icons-themify-tdm.css" />

        <a class="widget-openModal-fixed-circle" id="widgetOpenModal"><i class="widget-openModal-fixed-circle-icon ti-comment"></i></a>
        
        <div id="customDynamicModal" class="widgetModal">
            <div class="widgetModalContent">
                <span class="widgetCloseButton">&times;</span>
                    <div id="formContainer">

                        <div data-paperform-id="w3bjtuop"></div>

                    </div>
            </div>
        </div>
    `;

    // Inject the modal HTML into the page
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Identify the modal and other elements
    var widgetModal = document.getElementById('customDynamicModal');
    var widgetDisplayModal = document.getElementById("widgetOpenModal");
    var closeButton = document.getElementsByClassName("widgetCloseButton")[0];

    // Open modal event
    widgetDisplayModal.onclick = function() {
        widgetModal.style.display = "block";
    };

    // Close modal events
    closeButton.onclick = function() {
        widgetModal.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target == widgetModal) {
            widgetModal.style.display = 'none';
        }
    };

});

// Append the FORM (paperform) script to the body
(function() {
    var script = document.createElement('script');
    script.src = "https://paperform.co/__embed.min.js";
    document.body.appendChild(script);
})();
