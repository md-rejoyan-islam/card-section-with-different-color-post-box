const postSection = document.querySelector(".post-section");

for (i = 0; i < 11; i++) {
  const postDiv = document.createElement("div");
  postDiv.className =
    "w-[350px] mx-auto rounded-md  bg-gradient-to-r [&:nth-child(5n+1)]:from-[#dfeaef] [&:nth-child(5n+1)]:via-[#daebed] [&:nth-child(5n+1)]:to-[#d3eeec] [&:nth-child(5n+2)]:from-[#d3f0d3] [&:nth-child(5n+2)]:via-[#d5efd1] [&:nth-child(5n+2)]:via-[#dceecc] [&:nth-child(5n+2)]:to-[#e0ecc7] [&:nth-child(5n+3)]:from-[#ffffff] [&:nth-child(5n+3)]:via-[#fbfbfb] [&:nth-child(5n+3)]:to-[#e8e8e8] [&:nth-child(5n+4)]:from-[#ddeec1] [&:nth-child(5n+4)]:via-[#dfedc4] [&:nth-child(5n+4)]:via-[#e5ebcc] [&:nth-child(5n+4)]:to-[#e9e9d1] [&:nth-child(5n+5)]:from-[#fafce8] [&:nth-child(5n+5)]:via-[#eff9e6] [&:nth-child(5n+5)]:via-[#e4f6e4] [&:nth-child(5n+5)]:to-[#d8f2e2]  hover:shadow-md hover:cursor-pointer post-div";
  postDiv.innerHTML = singlePost();
  postSection.appendChild(postDiv);
}

function singlePost() {
  return `
   <figure>
            <img src="https://media.sproutsocial.com/uploads/2016/10/Facebook-Posting-Tips-01.png" alt="" class="h-[180px] w-fit rounded-t-md object-cover post-img">
        </figure>
        <div class="px-4 grid items-center my-3">
            <div class="flex gap-4">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
            </span>
            <span> 2h ago</span>
            </div>
            <h1 class="my-2">
                খ্রিষ্টীয় ধর্মাবলম্বীদের প্রধান উৎসব, বড়দিন
            </h1>
            <div class="flex gap-4 my-2 fill-[#240d2f] text-[#240d2f]">
                <span class="flex items-center gap-1 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" "><path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path></svg> 16
                </span>
                <span class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg> 20
                </span>
            </div>
        </div>
    `;
}
