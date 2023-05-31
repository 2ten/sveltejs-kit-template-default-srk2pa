<script>
	export let slice
  import * as prismicH from "@prismicio/helpers";
  let align = slice.primary.image_side
</script>

<section class="alternate-grid">
  <div class="container"> 
    <div class="alternate-grid--container image-align--{align}">
      <div class="image-container">
        <img  
        src={prismicH.asImageSrc(slice.primary.optional_image)}
        srcset={prismicH.asImageWidthSrcSet(slice.primary.optional_image).srcset} 
        alt={slice.primary.optional_image.alt} 
        />
      </div>
      <div class="text-container">
        <h2 class="eyebrow-headline">{@html slice.primary.eyebrow_headline[0].text}</h2>
        <h1 class="title">{@html slice.primary.title[0].text}</h1>
        <p class="description">{@html slice.primary.description[0].text}</p>
      </div>
    </div>
  </div>
</section>
	  
<style>
.alternate-grid--container{
  display: flex;
  flex-direction:column;
}
.image-container{
  order:1;
}
.text-container{
  order:2;
}
@media(min-width:769px){
  .alternate-grid--container {
    align-items: center;
    flex-direction:row;
    justify-content: space-between;
  }
  .image-align--right .image-container{
    order:2;
  }
  .image-align--right .text-container{
    order:1;
  }
  .image-container {
    flex-basis: calc(50% - 20px);
  }
  .text-container {
    flex-basis: calc(50% - 20px);
    margin-left: 20px;
  }
}
.eyebrow-headline {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
}
.description {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
}
</style>


<!-- data: The actual content of the document, which is an object containing several fields.
title: A list of one or more objects containing the page title, in this case it's just one object with a heading1 type and a text value of "About Us".
description: A list of one or more objects containing the page description, in this case it's two objects, the first one is a paragraph type with a custom label, and the second one is a normal paragraph type.
body: A list of one or more objects representing the page body, which is a combination of various content sections.
The first section is of type "alternate_grid", which includes an eyebrow_headline paragraph, a title heading1, a description paragraph, an optional_image with an associated image, and a image_side property set to "left".
The second section is of type "call_to_action", which includes an icon_image with an associated image, a title heading1, a paragraph text, a button_link object containing a link_type of "Web" and a url to Google, and a button_label with a text value of "Click here".
The third section is of type "our_work" and includes an eyebrow_headline paragraph, a title heading1, a description paragraph, and a list of items, where each item represents a project and includes an image with an associated image, a title heading3, and a content paragraph. -->