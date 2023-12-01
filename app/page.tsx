import "@/stylesheets/home/style.css";

export default function Home() {
  return (
    <main>
			<section className="carouselCards card-container" id="carouselCards">
				<div className="productCard card card-hidden productCard1" id="productCard" background="SlideShowBG2.png">
					<div className="productCardInfo" id="productCardInfo">
						<h2 className="productCardName title" id="productCardName">Hammy Chat</h2>
					<p className="productCardDescription" id="productCardDescription">The chat application for all your conversations! Hammy Chat is a very secure and user friendly chat application that can send messages to you or anyone else in seconds. (Closed To Be Redesigned)</p>
					</div>
				</div>
				<div className="productCard card productCard2" id="productCard" background="SlideShowBG1.png">
					<div className="productCardInfo" id="productCardInfo">
						<h2 className="productCardName title" id="productCardName">Searchle</h2>
						<p className="productCardDescription" id="productCardDescription">The self proclaimed most private metasearch engine in the world. No trackers, no nothing. Searchle is completely free and extermely fast! You don't even need an account!</p>
					</div>
				</div>
				<div className="productCard card card-hidden productCard3" id="productCard" background="SlideShowBG3.png">
					<div className="productCardInfo" id="productCardInfo">
						<h2 className="productCardName title" id="productCardName">Studio</h2>
						<p className="productCardDescription" id="productCardDescription">The studio application that does everything, all in one place! H&C Studio fills all of your office and personal needs, whether it's video editing or programming an Operating System, it can do it.</p>
					</div>
				</div>
			</section>
			<div className="carouselBar" id="carouselBar">
				<div className="carouselBarItems" id="carouselBarItems">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className="pauseCarouselButton" id="pauseCarouselButton"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9 9H11V15H9V9ZM13 9H15V15H13V9Z"></path></svg>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className="unpauseCarouselButton" id="unpauseCarouselButton"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"className="carouselBarItemArrowLeft" id="carouselBarItemArrowLeft"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
					<div className="carouselBarItem carouselBarItemCircle" id="carouselBarItem1"></div>
					<div className="carouselBarItem carouselBarItemCircle" id="carouselBarItem2"></div>
					<div className="carouselBarItem carouselBarItemCircle" id="carouselBarItem3"></div>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className="carouselBarItemArrowRight" id="carouselBarItemArrowRight"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg>
				</div>
			</div>
			<section className="recentEvents" id="recentEvents">
				<hc-grid className="recentEventsGrid" id="recentEventsGrid">
					<hc-gridItem className="recentEventsGridItem" id="recentEventsGridItem">
						<div className="recentEventsGridItemImageContainer" id="recentEventsGridItemImageContainer">
							<img src="SlideShowBG1.png" alt="">
						</div>
						<div className="recentEventsGridItemTextContainer" id="recentEventsGridItemTextContainer">
							<p>This is just a grid item in the recent events section of h-and-c.co.uk!</p>
						</div>
					</hc-gridItem>
					<hc-gridItem className="recentEventsGridItem" id="recentEventsGridItem">
						<div className="recentEventsGridItemImageContainer" id="recentEventsGridItemImageContainer">
							<img src="SlideShowBG1.png" alt="">
						</div>
						<div className="recentEventsGridItemTextContainer" id="recentEventsGridItemTextContainer">
							<p>This is just a grid item in the recent events section of h-and-c.co.uk!</p>
						</div>
					</hc-gridItem>
					<hc-gridItem className="recentEventsGridItem" id="recentEventsGridItem">
						<div className="recentEventsGridItemImageContainer" id="recentEventsGridItemImageContainer">
							<img src="SlideShowBG1.png" alt="">
						</div>
						<div className="recentEventsGridItemTextContainer" id="recentEventsGridItemTextContainer">
							<p>This is just a grid item in the recent events section of h-and-c.co.uk!</p>
						</div>
					</hc-gridItem>
					<hc-gridItem className="recentEventsGridItem" id="recentEventsGridItem">
						<div className="recentEventsGridItemImageContainer" id="recentEventsGridItemImageContainer">
							<img src="SlideShowBG1.png" alt="">
						</div>
						<div className="recentEventsGridItemTextContainer" id="recentEventsGridItemTextContainer">
							<p>This is just a grid item in the recent events section of h-and-c.co.uk!</p>
						</div>
					</hc-gridItem>
				</hc-grid>
			</section>
			<div className="allProductsHeading-container">
				<div className="allProductsHeading-line"></div>
				<h1 className="allProductsHeading-text">All Products</h1> 
				<div className="allProductsHeading-line"></div>
			</div>
			<section className="allProducts" id="allProducts">
				<hc-grid className="allProductsGrid" id="allProductsGrid">
					<hc-gridItem className="allProductsGridItem" id="allProductsGridItem">
						<div className="allProductsGridItemImageContainer" id="allProductsGridItemImageContainer">
							<img src="SlideShowBG1.png" alt="">
						</div>
						<div className="allProductsGridItemTextContainer">
							<h1>Hammy Chat</h1>
							<p>The chat application for all your conversations! Hammy Chat is a very secure and user friendly chat application that can send messages to you or anyone else in seconds. (Closed To Be Redesigned)</p>
						</div>
					</hc-gridItem>
					<hc-gridItem className="allProductsGridItem" id="allProductsGridItem">
						<div className="allProductsGridItemImageContainer" id="allProductsGridItemImageContainer">
							<img src="SlideShowBG1.png" alt="">
						</div>
						<div className="allProductsGridItemTextContainer">
							<h1>Searchle</h1>
							<p>The self proclaimed most private metasearch engine in the world. No trackers, no nothing. Searchle is completely free and extermely fast! You don't even need an account!</p>
						</div>
					</hc-gridItem>
					<hc-gridItem className="allProductsGridItem" id="allProductsGridItem">
						<div className="allProductsGridItemImageContainer" id="allProductsGridItemImageContainer">
							<img src="SlideShowBG1.png" alt="">
						</div>
						<div className="allProductsGridItemTextContainer">
							<h1>Studio</h1>
							<p>The studio application that does everything, all in one place! H&C Studio fills all of your office and personal needs, whether it's video editing or programming an Operating System, it can do it.</p>
						</div>
					</hc-gridItem>
					<hc-gridItem className="allProductsGridItem" id="allProductsGridItem">
						<div className="allProductsGridItemImageContainer" id="allProductsGridItemImageContainer">
							<img src="SlideShowBG1.png" alt="">
						</div>
						<div className="allProductsGridItemTextContainer">
							<h1>Another Product</h1>
							<p>Description</p>
						</div>
					</hc-gridItem>
				</hc-grid>
			</section>
    </main>
  )
}
