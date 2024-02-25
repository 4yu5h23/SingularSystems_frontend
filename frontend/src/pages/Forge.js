import React from 'react'
import './Forge.css'

const Forge = () => {
    return (
        <div id='forgeId'>
            <section className="py-5">
                <div className="container">
                    <div className="row gx-5">
                        <aside className="col-lg-6">
                            <div className="border rounded-4 mb-3 d-flex justify-content-center">
                                <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="/">
                                    <img style={{ maxWidth: "100%", maxHeight: "100vh", margin: "auto" }} className="rounded-4 fit" src="/images/forge.png" alt='forge-pc' />
                                </a>
                            </div>
                            <div className="d-flex justify-content-center mb-3">
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="/" >
                                    <img width="60" height="60" className="rounded-2" src="/images/forge.png" alt='forge-pc' />
                                </a>
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="/" >
                                    <img width="60" height="60" className="rounded-2" src="/images/forge.png" alt='forge-pc' />
                                </a>
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="/" >
                                    <img width="60" height="60" className="rounded-2" src="/images/forge.png" alt='forge-pc' />
                                </a>        
                            </div>
                        </aside>

                        <main className="col-lg-6">
                            <div className="ps-lg-3">

                                <div className="container">
                                    <h1>Forge</h1>
                                    <ul>
                                        <li>Intel Core i5-13400F (10 Cores/16 Threads)</li>
                                        <li>MSI Pro B650M-A CEC DDR4 WiFi Motherboard</li>
                                        <li>NVIDIA GeForce RTX 3060 </li>
                                    <li>Cooler Master Hyper 212 Air Cooler</li>
                                        <li>16GB T-FORCE DELTA RGB DDR4 3600MHz Memory (2x8GB)</li>
                                        <li>512GB Solidigm P41 M.2 </li>
                                        <li>NVMe SSD600W EVGA Power Supply</li>
                                        <li>Windows 11 Home</li>
                                        <li>RGB Lighting Kit & Rear RGB Fan</li>
                                        <li>NZXT H5 Elite Case</li>
                                    </ul>
                                </div>

                                <hr />
                                <div class="mb-3">
                                    <h5 className='price' id='forgePrice'>₹79,999</h5>
                                </div>

                                <a href="/payment" className="btn btn-warning shadow-0"> Buy now </a>
                                <a href="/cart" className="btn btn-primary shadow-0 mx-4">Add to cart </a>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Forge
