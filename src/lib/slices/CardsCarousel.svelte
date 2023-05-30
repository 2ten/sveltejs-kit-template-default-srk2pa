<script>
  import { onMount, afterUpdate } from 'svelte';
  import SwiperCore, { Navigation, Pagination } from 'swiper';
  import 'swiper/swiper-bundle.css';
	import { PrismicImage } from "@prismicio/svelte"

  export let slice;
  export let carouselId;
  const { width, height } = slice.items[0].image.dimensions;

  SwiperCore.use([Navigation, Pagination]);

  let swiperInstance;

  onMount(() => {
    swiperInstance = new SwiperCore(`.${carouselId}-mySwiper`, {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: `.${carouselId}-swiper-button-next`,
        prevEl: `.${carouselId}-swiper-button-prev`,
      },
      pagination: {
        el: `.${carouselId}-swiper-pagination`,
        clickable: true,
      },
    });
  });

  afterUpdate(() => {
    swiperInstance.update();
  });
</script>
	
<div class="primary">
	<div class="container mx-auto">


	<div class="eyebrow_headline">
	  <p>{slice.primary.eyebrow_headline[0].text}</p>
	</div>
	<div class="title">
	  <h1>{slice.primary.title[0].text}</h1>
	</div>
	<div class="description">
	  <p>{slice.primary.description[0].text}</p>
	</div>
  </div>
  


  <div class="swiper mySwiper {carouselId}-mySwiper">
    <div class="swiper-wrapper">
      {#each slice.items as item}
        <div class="swiper-slide">
          <div class="items">
  
            <div class="item">
              <div class="card">
                <div class="image">
                  <PrismicImage field={item.image} />
                </div>
                <div class="card-body">
                  <h3 class="card-title">{item.title[0].text}</h3>
                  <p class="card-text">{item.content[0].text}</p>
                  <p class="card-text">{item.additional_info[0].text}</p>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      {/each}
    </div>

    <div class="{carouselId}-swiper-pagination swiper-pagination"></div>
    </div>
  </div>
  
	<style>
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
	.primary {
				background-color: #f9f9f9;
				padding: 20px;
				text-align: center;
			}
	
			.eyebrow_headline {
				font-size: 16px;
				font-weight: bold;
				text-transform: uppercase;
				margin-bottom: 10px;
			}
	
			.title {
				margin-bottom: 20px;
			}
	
			.title h1 {
				font-size: 36px;
				font-weight: bold;
			}
	
			.description {
				font-size: 20px;
				margin-bottom: 30px;
			}
	
			
			.image {
				margin-bottom: 20px;
			}
	
			.image img {
				width: 100%;
				height: auto;
				display: block;
			}
	
		</style>