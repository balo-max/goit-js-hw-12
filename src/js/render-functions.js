export const createImgTemplate = infoImg => {
  return `
    <li class="gallery-card">
      <a class="gallery-link" href="${infoImg.largeImageURL}">
        <img class="gallery-img" src="${infoImg.webformatURL}" alt="${infoImg.tags.split(",").slice(0,3)}" width="360" height="250" /></a>
        <ul class="img-text-list">
          <li class="img-text-item">Likes
            <p class="img-text">${infoImg.likes}</p>
          </li>
          <li class="img-text-item">Views
            <p class="img-text">${infoImg.views}</p>
          </li>
          <li class="img-text-item">Comments
            <p class="img-text">${infoImg.comments}</p>
          </li>
          <li class="img-text-item">Downloads
            <p class="img-text">${infoImg.downloads}</p>
          </li>
        </ul>
    </li>`;
};