  /* useEffect(() => {
    //console.log(ref.current) // divin icindekiler görüldu
    //console.log(ref.current.querySelectorAll('img'))  //Nodelist görüldü

    let images = ref.current.querySelectorAll('img'),
    total = images.length,
    current=0
    setInterval(()=> {
      images[current].classList.remove('opacity-0')
      current += 1
    }, 1000)
    
  }, [ref]) */
  
  useEffect(() => {
    let images = ref.current.querySelectorAll('img'),
        total = images.length,
        current = 0
    const imageSlider = () => {
        if (current > 0) {
            images[current - 1].classList.add('opacity-0 ')
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
    let interval = setInterval(imageSlider, 3000)
    return () => {
        clearInterval(interval)
    }
}, [ref])