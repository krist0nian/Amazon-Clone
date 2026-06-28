import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="footer">
        <Link to="/"><button id="backToTop" className="footer__back--Top"><div className="footer__back--text">Back to Top</div></button></Link>
        <div className="footer__vertical--column">
            <div className="footer__vertical--row">
                <div className="footer__link--column">
                    <h2 className="footer__col--header">Get to Know Us</h2>
                        <ul>
                            <li className="footer__col--link"><a href="https://www.amazon.jobs" class="nav_a">Careers</a></li>
                            <li className="footer__col--link"><a href="https://email.aboutamazon.com/l/637851/2020-10-29/pd87g?utm_source=gateway&amp;utm_medium=amazonfooters&amp;utm_campaign=newslettersubscribers&amp;utm_content=amazonnewssignup" class="nav_a">Amazon Newsletter</a></li>
                            <li className="footer__col--link"><a href="https://www.aboutamazon.com/?utm_source=gateway&amp;utm_medium=footer&amp;token=about" class="nav_a">About Amazon</a></li>
                            <li className="footer__col--link"><a href="https://www.amazon.com/b?node=15701038011&amp;ie=UTF8" class="nav_a">Accessibility</a></li>
                            <li className="footer__col--link"><a href="https://sustainability.aboutamazon.com/?utm_source=gateway&amp;utm_medium=footer&amp;ref_=susty_footer" class="nav_a">Sustainability</a></li>
                            <li className="footer__col--link"><a href="https://www.amazon.com/pr" class="nav_a">Press Center</a></li>
                            <li className="footer__col--link"><a href="https://www.amazon.com/ir" class="nav_a">Investor Relations</a></li>
                            <li className="footer__col--link"><a href="/gp/browse.html?node=2102313011&amp;ref_=footer_devices" class="nav_a">Amazon Devices</a></li>
                            <li className="footer__col--link"><a href="https://www.amazon.science" class="nav_a">Amazon Science</a></li>
                        </ul>    
                </div>
                    <div className="footerColSpaceInner"></div>
                
                <div className="footer__link--column">
                    <h2 className="footer__col--header">Make Money with Us</h2>
                        <ul>
                            <li className="footer__col--link"><a href="https://sell.amazon.com/?ld=AZFSSOA_FTSELL-C&amp;ref_=footer_soa" class="nav_a">Sell on Amazon</a></li>
                            <li className="footer__col--link"><a href="https://developer.amazon.com" class="nav_a">Sell apps on Amazon</a></li>
                            <li className="footer__col--link"><a href="https://supply.amazon.com" class="nav_a">Supply to Amazon</a></li>
                            <li className="footer__col--link"><a href="https://sell.amazon.com/brand-registry?ld=AZUSSOA_ABR-FT" class="nav_a">Protect &amp; Build Your Brand</a></li>
                            <li className="footer__col--link"><a href="https://affiliate-program.amazon.com/" class="nav_a">Become an Affiliate</a></li>
                            <li className="footer__col--link"><a href="https://dspjobhub.com/" class="nav_a">Become a Delivery Driver</a></li>
                            <li className="footer__col--link"><a href="https://logistics.amazon.com/marketing?utm_source=amzn&amp;utm_medium=footer&amp;utm_campaign=home" class="nav_a">Start a Package Delivery Business</a></li>
                            <li className="footer__col--link"><a href="https://advertising.amazon.com/?ref=ext_amzn_ftr" class="nav_a">Advertise Your Products</a></li>
                            <li className="footer__col--link"><a href="/gp/seller-account/mm-summary-page.html?ld=AZFooterSelfPublish&amp;topic=200260520&amp;ref_=footer_publishing" class="nav_a">Self-Publish with Us</a></li>
                        </ul>    
                </div>
                    <div className="footerColSpaceInner"></div>

                <div className="footer__link--column">
                    <h2 className="footer__col--header">Amazon Payment Products</h2>
                        <ul>
                            <li className="footer__col--link"><a href="/iss/credit/rewardscardmember?plattr=CBFOOT&amp;ref_=footer_cbcc" class="nav_a">Amazon Visa</a></li>
                            <li className="footer__col--link"><a href="/credit/storecard/member?plattr=PLCCFOOT&amp;ref_=footer_plcc" class="nav_a">Amazon Store Card</a></li>
                            <li className="footer__col--link"><a href="/dp/product/B084KP3NG6?plattr=SCFOOT&amp;ref_=footer_ACB" class="nav_a">Amazon Secured Card</a></li>
                            <li className="footer__col--link"><a href="/dp/B0DVBL912R?plattr=ACOMFO&amp;ie=UTF-8" class="nav_a">Amazon Business Card</a></li>
                            <li className="footer__col--link"><a href="https://www.amazon.com/hp/shopwithpoints/servicing" class="nav_a">Shop with Points</a></li>
                            <li className="footer__col--link"><a href="/gp/browse.html?node=3561432011&amp;ref_=footer_ccmp" class="nav_a">Credit Card Marketplace</a></li>
                            <li className="footer__col--link"><a href="/gp/browse.html?node=10232440011&amp;ref_=footer_reload_us" class="nav_a">Reload Your Balance</a></li>
                            <li className="footer__col--link"><a href="https://www.amazon.com/b/?node=2238192011&amp;ref=shop_footer_payments_gc_desktop" class="nav_a">Gift Cards</a></li>
                            <li className="footer__col--link"><a href="/gp/browse.html?node=388305011&amp;ref_=footer_tfx" class="nav_a">Amazon Currency Converter</a></li>
                        </ul>    
                </div>
                    <div className="footerColSpaceInner"></div>

                  <div className="footer__link--column">
                    <h2 className="footer__col--header">Let Us Help You</h2>
                        <ul>
                            <li className="footer__col--link"><a href="https://www.amazon.com/gp/css/homepage.html?ref_=footer_ya" class="nav_a">Your Account</a></li>
                            <li className="footer__col--link"><a href="https://www.amazon.com/gp/css/order-history?ref_=footer_yo" class="nav_a">Your Orders</a></li>
                            <li className="footer__col--link"><a href="/gp/help/customer/display.html?nodeId=468520&amp;ref_=footer_shiprates" class="nav_a">Shipping Rates &amp; Policies</a></li>
                            <li className="footer__col--link"><a href="/gp/prime?ref_=footer_prime" class="nav_a">Amazon Prime</a></li>
                            <li className="footer__col--link"><a href="/gp/css/returns/homepage.html?ref_=footer_hy_f_4" class="nav_a">Returns &amp; Replacements</a></li>
                            <li className="footer__col--link"><a href="/hz/mycd/myx?ref_=footer_myk" class="nav_a">Manage Your Content and Devices</a></li>
                            <li className="footer__col--link"><a href="https://www.amazon.com/product-safety-alerts?ref_=footer_bsx_ypsa" class="nav_a">Recalls and Product Safety Alerts</a></li>
                            <li className="footer__col--link"><a href="/registries?ref_=nav_footer_registry_giftlist_desktop" class="nav_a">Registry &amp; Gift List</a></li>
                            <li className="footer__col--link"><a href="/gp/help/customer/display.html?nodeId=508510&amp;ref_=footer_gw_m_b_he" class="nav_a">Help</a></li>
                        </ul>    
                    </div>
                </div>
            </div>
        <div className="footer__line"></div>
            <div classname="footer__link--line">
                <div className="footer__logo--line">
                    <Link to="/"><img className="header__logo" src="https://static.freepnglogo.com/images/all_img/1715487998amazon-logo-transparent.png"></img></Link>
                </div>
            </div>     
    </div>
  )
}

export default Footer
