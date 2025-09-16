import "./Style/about.css";

export default function About(props) {
    return (
        <div className='container my-2'>

            <h2 style={{backgroundColor : props.mode==='light'?'white':'#d3d3d3', color : props.mode==='light'?'black':'#232424'}}>About Us</h2>
            <div  className="accordion" id="accordionExample">
                <div style={{backgroundColor : props.mode==='light'?'white':'#d3d3d3', color : props.mode==='light'?'black':'#232424', borderColor: props.mode==='dark'? 'black':'black'}} className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={{backgroundColor : props.mode==='light'?'white':'#d3d3d3', color : props.mode==='light'?'black':'#232424'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            About TextUtils
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a dynamic web application built with React that provides a suite of tools for text manipulation. The application is designed to be highly responsive and user-friendly, allowing you to easily perform common text operations directly in your browser. Its core purpose is to be a simple yet powerful tool for developers, writers, and anyone who frequently works with text, offering a clean and efficient way to perform quick operations without the need for complex software.<br/>

                            <strong>Key Features and Functionality</strong>
                            <p>This application offers a wide range of features to streamline your text-editing tasks, including:</p>
                            <ul>
                            <li><strong>Case Conversion:</strong> Convert text to <strong>UPPERCASE</strong>, <strong>lowercase</strong>, <strong>CamelCase</strong>, or <strong>Title Case</strong> with a single click.</li>

                            <li><strong>Text Analytics:</strong> Get an instant count of the words and characters in your text as you type.</li>

                            <li><strong>Text Manipulation:</strong> Quickly reverse text, remove extra whitespace, or trim leading/trailing spaces.</li>

                            <li><strong>Clipboard Integration:</strong> Easily copy your processed text to the clipboard.</li>

                            <li><strong>Undo Functionality:</strong> Go back to your previous text state, providing flexibility and control over your edits.</li>

                            <li><strong>Dark/Light Mode:</strong> Toggle between themes to improve readability and reduce eye strain.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor : props.mode==='light'?'white':'#d3d3d3', color : props.mode==='light'?'black':'#232424', borderColor: props.mode==='dark'? 'black':'black'}} className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={{backgroundColor : props.mode==='light'?'white':'#d3d3d3', color : props.mode==='light'?'black':'#232424'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Technologies Used
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                            <li><strong>React:</strong> The primary library for building the user interface as a single-page application.</li>

                            <li><strong>React Hooks:</strong> Utilizes useState for managing component state, such as text and its history.</li>

                            <li><strong>React Router v6:</strong> Manages client-side routing, enabling seamless navigation between different sections.</li>

                            <li><strong>Bootstrap:</strong> A popular CSS framework used for styling and responsive design, ensuring a consistent user experience across devices.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor : props.mode==='light'?'white':'#d3d3d3', color : props.mode==='light'?'black':'#232424', borderColor: props.mode==='dark'? 'black':'black'}} className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={{backgroundColor : props.mode==='light'?'white':'#d3d3d3', color : props.mode==='light'?'black':'#232424'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Purpose
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a simple yet powerful tool for developers, writers, and anyone who frequently works with text. It offers a clean and efficient way to perform quick text operations without the need for complex software.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
