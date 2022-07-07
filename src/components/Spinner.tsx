export function Spinner() {
	return (
        <>
            <style>
            {`
                .spinner-container {
                    width: 100vw;
                    height: 80vh;
                    position: relative;
                }

                .spinner-background {
                    background-color: #cccccc;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 75px;
                    height: 75px;
                    border-radius: 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: .5;
                }

                .loader  {
                    animation: rotate 1s infinite;
                    height: 50px;
                    width: 50px;
                }

                .loader:before,
                .loader:after {
                    border-radius: 50%;
                    content: '';
                    display: block;
                    height: 20px;  
                    width: 20px;
                }

                .loader:before {
                    animation: ball1 1s infinite;  
                    background-color: #ff9732;
                    box-shadow: 30px 0 0 #f8b334;
                    margin-bottom: 10px;
                }

                .loader:after {
                    animation: ball2 1s infinite; 
                    background-color: #ffc400;
                    box-shadow: 30px 0 0 #ff9e00;
                }

                @keyframes rotate {
                    0% { 
                        -webkit-transform: rotate(0deg) scale(0.8); 
                        -moz-transform: rotate(0deg) scale(0.8);
                    }

                    50% {
                        -webkit-transform: rotate(360deg) scale(1.2); 
                        -moz-transform: rotate(360deg) scale(1.2);
                    }

                    100% { 
                        -webkit-transform: rotate(720deg) scale(0.8); 
                        -moz-transform: rotate(720deg) scale(0.8);
                    }
                }

                @keyframes ball1 {
                    0% {
                        box-shadow: 30px 0 0 #f8b334;
                    }

                    50% {
                        box-shadow: 0 0 0 #f8b334;
                        margin-bottom: 0;
                        -webkit-transform: translate(15px,15px);
                        -moz-transform: translate(15px, 15px);
                    }

                    100% {
                        box-shadow: 30px 0 0 #f8b334;
                        margin-bottom: 10px;
                    }
                }

                @keyframes ball2 {
                    0% {
                        box-shadow: 30px 0 0 #ff9e00;
                    }

                    50% {
                        box-shadow: 0 0 0 #ff9e00;
                        margin-top: -20px;
                        -webkit-transform: translate(15px,15px);
                        -moz-transform: translate(15px, 15px);
                    }

                    100% {
                        box-shadow: 30px 0 0 #ff9e00;
                        margin-top: 0;
                    }
                }
            `}
            </style>
            <div
                className="spinner-container"
            >
                <div
                    className="spinner-background"
                >
                    <div className="loader"></div>
                </div>
            </div>
        </>
    );
}