document.addEventListener('DOMContentLoaded', function() {
    // Define the modal HTML with a unique container for the form
    var modalHTML = `
    <style type="text/css">

        .widget-color {
            background-color: #B68E91;
        }

        .widgetModal {
            display: none; 
            position: fixed; 
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto; 
            background-color: rgba(255, 255, 255, 0.8) !important;
        }

        .widgetModalContent {
            background-color: #ffffff !important;
            border: none !important;
            border-radius: 20px !important;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px !important;
            overflow-y: visible;
            overflow-wrap: break-word;
        }

        .widgetModalContent iframe { 
            border: none !important; 
            box-sizing: border-box;
            border-radius: 20px !important;
        }

        .widgetCloseButton {
            top: 55px;
            background-color: #ffffff;
            border-radius: 100%;
            position: absolute !important;
            z-index: 10 !important;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px !important;
        }

        .widgetCloseButton-icon {
            color: #1f1f1f !important;
            padding-left: 12px !important;
            padding-right: 12px !important;
            padding-top: 6px !important;
            padding-bottom: 6px !important;
            font-size: 12px !important;
            font-weight: bold !important;
        }

        .widgetCloseButton:hover,
        .closeButton:focus {
            color: #1f1f1f !important;
            text-decoration: none !important;
            cursor: pointer;
        }

        #widgetOpenModal {
            position: fixed; 
        }

        .widget-openModal-fixed-circle {
            border-radius: 50% !important;;
            padding: 18px;
            position: fixed; 
            bottom: 30px; 
            right: 5%;
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

        .widgetModalContent::-webkit-scrollbar {
            display: none !important;
        }

        .widgetModalContent {
            -ms-overflow-style: none !important;
            scrollbar-width: none !important;
        }

        .widget-openModal-div {
            position: fixed;
        }

        .widget-openModal-div a {
            display: block;
        }

        @media only screen and (max-width: 600px) {

            .widgetModalContent {
                margin-top: 45px !important;
                margin-bottom: 45px !important;
                margin-right: auto;
                margin-left: auto; 
                padding-top: 0px !important;
                padding-bottom: 0px !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
                width: 96%;
                max-height: 600px;
            }

            .widgetCloseButton {
                right: 3%;
            }
        }

        @media only screen and (min-width: 600px) {

            .widgetModalContent {
                margin-top: 45px !important;
                margin-bottom: 45px !important;
                margin-right: auto;
                margin-left: auto; 
                padding-top: 0px !important;
                padding-bottom: 0px !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
                width: 96%;
                max-height: 600px;
            }

            .widgetCloseButton {
                right: 3%;
            }
        }

        @media only screen and (min-width: 900px) {

            .widgetModalContent {
                margin-top: 45px !important;
                margin-bottom: 45px !important;
                margin-right: auto;
                margin-left: auto; 
                padding-top: 0px !important;
                padding-bottom: 0px !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
                width: 90%;
                max-height: 600px;
            }

            .widgetCloseButton {
                right: 6%;
            }
        }

        @media only screen and (min-width: 1200px) {

            .widgetModalContent {
                margin-top: 45px !important;
                margin-bottom: 45px !important;
                margin-right: auto;
                margin-left: auto; 
                padding-top: 0px !important;
                padding-bottom: 0px !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
                width: 80%;
                max-height: 600px;
            }

            .widgetCloseButton {
                right: 11%;
            }
        }

        </style>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cdlckrs/tdm@406dc861e74cff12438d2ac42850d3a0e47e2c29/cL-icons-themify-tdm.css" />

        <div class="widget-openModal-div"><a class="widget-openModal-fixed-circle widget-color" id="widgetOpenModal"><i class="widget-openModal-fixed-circle-icon ti-comment"></i></a></div>
        
        <div id="customDynamicModal" class="widgetModal">
            
            <div class="widgetModalContent">

                    <div id="videoContainer" style="border-radius: 20px !important;">

                        <div class="widgetCloseButton"><div class="widgetCloseButton-icon">&#10005;</div></div>

                        <iframe src="https://www.videoask.com/f988uh1rm?propertyemail=XXXX&propertyid=XXXX&propertyname=XXXX&propertyslug=XXXX" allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;" width="100%" height="600px" style="border: none; border-radius: 20px !important; min-height: 600px;"></iframe>

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
