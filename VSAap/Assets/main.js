fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&key=AIzaSyD6Tf2zpMApXIH-fgLqon17_4CUr4oQi2U')
.then((res)=>{
    return res.json();
}).then((data)=>{
  /*   console.log(data.items) */
    const video_list=data.items;
    const parent_container=document.getElementById("card_container")
    for (let i = 0; i < video_list.length; i++) {
        const Single_video = video_list[i];
        const video_id=Single_video.id;
        console.log(Single_video)
        const thumbnail=Single_video.snippet.thumbnails.high.url;
        const title=Single_video.snippet.title;
        const channel_name=Single_video.snippet.channelTitle;
        const view_count=Single_video.statistics.viewCount;
        
        //title
        const title_elem=document.createElement("h5");
        title_elem.innerText=title;
        title_elem.classList.add("card-title");

        //create anchor tag to get video play
        const anchor=document.createElement("a")
        anchor.href=`details.html?id=${video_id}`
        anchor.appendChild(title_elem)

        //channel name & view count
        const para_elem=document.createElement("p");
        para_elem.innerText=`${channel_name} || ${view_count} views`
        para_elem.classList.add("card-text");
        //Title,channel-name & viewcount in this div. 
        const div_elem=document.createElement("div");
        div_elem.classList.add("card-body");

        //display on the screen by adding child to html element using appendchild().
        div_elem.appendChild(anchor);
        div_elem.appendChild(para_elem);
        // image
        const img_elem=document.createElement("img");
        img_elem.src=thumbnail;
        img_elem.classList.add("card-img-top")
        //creating a div element 
        const div_elem1=document.createElement("div")
        div_elem1.classList.add("card")
        div_elem1.classList.add('my-2')
        div_elem1.style.width="14rem";
        div_elem1.appendChild(img_elem);
        div_elem1.appendChild(div_elem);

        //create parent div
        const div_elem2=document.createElement("div")
        div_elem2.classList.add("col");
        div_elem2.appendChild(div_elem1)
        parent_container.appendChild(div_elem2)
        
    }
});