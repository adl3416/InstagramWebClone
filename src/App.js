import { useEffect, useRef } from "react";


function App() {

  const ref = useRef()


useEffect(() => {
   //console.log(ref.current) // divin icindekiler görüldu
    //console.log(ref.current.querySelectorAll('img'))  //Nodelist görüldü
		let images = ref.current.querySelectorAll('img'),
			total = images.length,
			current = 0
		const imageSlider = () => {
			if (current > 0) {
				images[current - 1].classList.add('opacity-0')
			} else {
				images[total - 1].classList.add('opacity-0')
			}
			images[current].classList.remove('opacity-0')
			if (current === total - 1) {
				current = 0
			} else {
				current += 1
			}
		}
		imageSlider()
		let interval = setInterval(imageSlider, 2000)
		return () => {
			clearInterval(interval)
		}
	}, [ref])


  return (

    
    <div  className="h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center">
          
     <div className=" w-[380px] h-[581px] bg-red-300  bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">                               {/*logo-pattern i tailvind.config de ayarladik. resmin adresi oradaverildi */}
       <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]" ref={ref}>
               
       <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
							 src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
							 alt=""/>
					<img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
							 src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
							 alt=""/>
					<img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
							 src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
							 alt=""/>
					<img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
							 src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
							 alt=""/>
       </div>
     </div>

     <div className=" w-[350px] h-[581px] bg-white border p-[50px] pt-10 pb-6">
     <a href="#" className="flex justify-center mb-8">
						<img className="h-[51px]"
								 src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt=""/>
					</a>
        <form>
          <label> 
            <input type="text" className=" bg-zinc-50 border"/>
          </label>

        </form>
     </div>
    </div>
  );
}

export default App;


