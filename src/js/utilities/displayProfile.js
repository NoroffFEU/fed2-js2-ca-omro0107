export function displayUser() {
  const domBody = document.getElementById("profileBody");
  const createUserBanner = document.createElement("img");
  const createAvatarImg = document.createElement("img");
  const createUserName = document.createElement("h2");
  const createUserBio = document.createElement("p");

  createUserBanner.setAttribute("id", "userBanner");
  createAvatarImg.setAttribute("id", "avatarImg");

  let userData;
  if (localStorage.clickedUserData) {
    userData = JSON.parse(localStorage.clickedUserData);
  } else {
    userData = JSON.parse(localStorage.myUserData);
  }

  createUserBanner.src = userData.data.banner.url;
  createUserBanner.setAttribute("alt", userData.data.banner.alt);

  createAvatarImg.src = userData.data.avatar.url;
  createAvatarImg.setAttribute("alt", userData.data.avatar.alt);

  createUserName.innerHTML = userData.data.name;
  createUserBio.innerHTML = userData.data.bio;

  domBody.prepend(createUserBanner, createAvatarImg, createUserName, createUserBio);
}