const galleryy =document.querySelectorAll(".room-gallery .image");
 var previewBox = document.querySelector(".preview-box");
 var previewImg = previewBox.querySelector("img");
 var closeIcon = previewBox.querySelector(".icon.fas.fa-times");
 var currentImg = previewBox.querySelector(".current-img");
 var totalImg = previewBox.querySelector(".total-img");
const filterItem = document.getElementById("filter-items");
var categoryName = previewBox.querySelector(".title p");
shadow = document.querySelector(".shadow");
 
const SetGallery = () =>{
	
	filterItem.onclick = (selectedItem)=>{
		if(selectedItem.target.classList.contains("item")){
			// Tıklanan kategoriyi aktif hale getirme
			filterItem.querySelector(".active").classList.remove("active");
			selectedItem.target.classList.add("active");
            
			let filterName = selectedItem.target.getAttribute("data-name"); // Seçilen filtrenin data name'ini alma.
			galleryy.forEach((image)=>{
				let filterImages = image.getAttribute("data-name"); // Foreach ile galerideki fotoğraflar ile seçilen filtrenin datasının karşılaştırır.
				if((filterImages==filterName) || filterName=="all"){
					image.classList.remove("hide");
					image.classList.add("show");                    
				}else{
					image.classList.add("hide");
					image.classList.remove("show");
				}				 
			})
		}
	}    
	// Resim Ekranı Kısmı
	for(let index=0; index<galleryy.length;index++) {
		galleryy[index].setAttribute("onclick","preview(this)");
	}
}

function preview(element) {
	document.querySelector("body").style.overflow = "hidden";

	//Resimleri açma
	let selectedPrevImg = element.querySelector("img").src;
	previewImg.src=selectedPrevImg;

	//Kategori yazma
	let selectedImgCategory = element.getAttribute("data-name");
    categoryName.textContent=selectedImgCategory;

	// Resimleri Kapama
	previewBox.classList.add("show");
	shadow.classList.add("shadow");

	closeIcon.onclick = ()=>{
		previewBox.classList.remove("show");
	    shadow.classList.remove("show");
	document.querySelector("body").style.overflow = "scroll"; // Resim ekranı açıldığında scroll kısmını kapar.    
	}
}