export default function Footer() {
    return (
        <>
            <div className="sfondomain text-white py-3">
                <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <button className="btn btn-outline-primary text-white fw-bold mb-3 mb-md-0">
                        SIGN-UP NOW!
                    </button>

                    <div className="d-flex align-items-center gap-3">
                        <p className="text-primary mb-0">FOLLOW US</p>
                        <div className="d-flex gap-3">
                            <img src="/img/footer-facebook.png" alt="" className="social-icon" />
                            <img src="/img/footer-twitter.png" alt="" className="social-icon" />
                            <img src="/img/footer-youtube.png" alt="" className="social-icon" />
                            <img src="/img/footer-pinterest.png" alt="" className="social-icon" />
                            <img src="/img/footer-periscope.png" alt="" className="social-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}