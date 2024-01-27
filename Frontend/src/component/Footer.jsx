import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="bg-light text-center fixed-bottom">
                <div class="text-center p-3 shadow-5-strong" style={{backgroundColor: '#FBFBFB'}}>
                    © 2024 Copyright :
                    <a class="text-dark" style={{fontWeight:"bold"}}>
                        <span style={{color: "#3B71CA"}}> TechnicalMaid</span>
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer