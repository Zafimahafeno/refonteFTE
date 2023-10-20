import { FaPause, FaPlay } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar/sidebar';
import './reservation.css'
import React, { useState } from 'react';
import ReactPlayer from "react-player";
import { CgMenuRight } from "react-icons/cg";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
// import moment from 'moment';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useEffect } from 'react';
import Modal from '../../components/modal/Modal';
import Autocomplete from '../../components/drowpDown/Autocomplete';
import PlaceView from './PlaceView';
import Reservation from './Reservation';
import axios from 'axios';
import './modal/Modalpage.css';

const videos = [
  {
    id: 1,
    nom:'Neymar',
    desc:'Roi du foot-ball',
    url: "https://www.youtube.com/watch?v=0wVUFtBTBxY",
    img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5d6c5834006921b6/64c7a54446309eb49d63dbba/Neymar.jpg?auto=webp&format=pjpg&width=640&quality=60"
  },
  {
    id: 2,
    nom:'Jordan',
    desc:'Roi du basket-ball',
    url: "https://www.youtube.com/watch?v=3e95hY7boog",
    img: "https://www.lavieeco.com/wp-content/uploads/2023/04/Jordan-1536x1536.jpg"
  },
  {
    id: 3,
    nom:'Novak Djokovic',
    desc:'Roi du tennis',
    url: "https://www.youtube.com/watch?v=_awxdvmm_ok",
    img: "https://www.tennisworldfr.com/imge/24969/novak-djokovic-bat-tous-les-records-il-est-destine-a-eclipser-tous-les-autres.webp"
  }
];

function StandForm({ handleClose }) {
    const [formData, setFormData] = useState({
      name_pvi: '',
      phone_pvi: '',
      mail_pvi: '',
      payment_pvi: '',
      date_pvi: '',
      number_pvi: '',
      theme: '',
    });
  
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formDataToSend = new FormData();
      for (let key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      console.log(formData);
  
      axios.post('http://localhost:8081/Create_Reservation_Place', formData)
        .then((response) => {
          if (response.data.succee) {
            setSuccessMessage(response.data.succee);
            setErrorMessage(null);
          } else {
            setErrorMessage('Erreur lors du reservation de place.');
            setSuccessMessage(null);
          }
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage('Erreur lors du reservation de place pour la Master Class.');
          setSuccessMessage(null);
        });
    };
  
    return (
      <div className="centre-form">
        <form onSubmit={handleSubmit}>
         
          <div className="formgroup">
            <div className="inputgroup">
              <label>Veuillez entrer votre nom:</label>
              <input
                type="text"
                name="name_pvi"
                value={formData.name_pvi}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="formgroup">
            <div className="inputgroup">
              <label>Veuillez entrer votre contact:</label>
              <input
                type="text"
                name="phone_pvi"
                value={formData.phone_pvi}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="formgroup">
            <div className="inputgroup">
              <label>Votre adresse e-mail:</label>
              <input
                type="email"
                name="mail_pvi"
                value={formData.mail_pvi}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="formgroup">
            <div className="inputgroup">
              <label>Mode de paiement :</label>
              <select
                name="payment_pvi"
                value={formData.payment_pvi}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionnez une méthode de paiement</option>
                <option value="Espece">Espece</option>
                <option value="Mobile Money">Mobile Money</option>
                <option value="Carte">Carte</option>
              </select>
            </div>
            <div className="formgroup">
            <div className="inputgroup">
              <label>Date de réservation:</label>
              <input
                type="date"
                name="date_pvi"
                value={formData.date_pvi}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="formgroup">
            <div className="inputgroup">
              <label>Nombre de place:</label>
              <input
                type="number"
                name="number_pvi"
                value={formData.number_pvi}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="formgroup">
          <div className="inputgroup">
              <label>Theme du Master Class :</label>
              <select
                name="theme"
                value={formData.theme}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionnez le thème selon les dates du Master Class</option>
                <option value="Theme1">Theme1</option>
                <option value="Theme2">Theme2</option>
                <option value="Theme3">Theme3</option>
              </select>
            </div>
          </div>
          </div>
        </form>
        
        <input onClick={handleClose} type='submit' value={'Annuler'} style={{background:'red'}} />
        <input onClick={handleSubmit} type='submit' value={'Réserver'} style={{background: '#0066ff',}} />
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    );
  }


function ReservationMasterClass() {
  const [isPlaying, setIsPlaying] = useState(null);
  const [showimg, setShowImg] = useState(false)

  const [heroSwiper, setSwiperRef] = useState(null);
  const playHero = () => {
    heroSwiper.autoplay.start();
  };
  const pauseHero = () => {
    heroSwiper.autoplay.stop();
  };

    const [places, setPlaces] = useState([])
    
    useEffect(() => {
        const setplace = ()=>{
            const place = []
            for (let index = 1; index <= 224; index++) {
                const element = index;
                place.push({id:element, status:'disponible'})
            }
            setPlaces(place);
        }
        return setplace();
    }, [])
    
    const calendrier = [
        {hour:'09h 00', date:'Jeu 07 dec', title:'Master Class One'},
        {hour:'14h 30', date:'Jeu 07 dec', title:'Master Class Two'},
        {hour:'08h 30', date:'Ven 08 dec', title:'Master Class Three'},
        {hour:'10h 30', date:'Ven 08 dec', title:'Master Class Four'},
        {hour:'14h 30', date:'Ven 08 dec', title:'Master Class Four'},
        {hour:'16h 30', date:'Ven 08 dec', title:'Master Class Four'},
    ]
    
    const handleClick = (item) => {
    }

    const selected = [];
    
    const handelClick = () => {
        setOpen(true)
        setNb(selected.length)
    }

    const [open, setOpen] = useState(false);
  
    const handlebtnPlay = () => {
        if (isPlaying) {
            playHero()
        } else {
            pauseHero()
        }
    }

    
    const setItem=(value)=>{
        const test = selected.filter(id => id.id===value.id)
        if (test.length > 0) {
            places.splice(0, 1, { id: test[0].id, status: "disponible" });
            selected.splice(selected.indexOf(test[0].id), 1);
            console.log(selected);
        } else {
            places.splice(places.indexOf(value), 1, { id: value.id, status: "select" });
            selected.push({ id: value.id });
            console.log(selected);
        }
    }

    const [nb, setNb] = useState(null);

    const handleClose = () => {
        setOpen(false)
        console.log(selected);
    }
    
  return (
    <div className='reservationMasterClass'>
        
        <Sidebar />
        <Modal open={open}>
            <div className="adreservation">
            <StandForm handleClose={handleClose} />
            </div>
        </Modal>

        <div className='content'>
            <div className="contentheader">
                <div className='title'>
                    <span>Master Class</span>
                </div>
                <div className='right'>
                      <CgMenuRight className='iconright' size={50} />
                </div>
            </div>
            <div className="container">
                <div className="content-left">
                    <Swiper
                        ref={heroSwiper}
                        modules={[Pagination, Navigation, Autoplay]}
                        loop
                        onSlideChange={() => { 
                            setIsPlaying(null);
                            setShowImg(false);
                        }}
                        onSwiper={ setSwiperRef }
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        watchSlidesProgress={false}
                        // navigation= {{
                        //     nextEl: '.next',
                        //     prevEl: '.prev',}
                        // }
                        style={{
                            width: '90%',
                            marginTop: 20,
                            position: 'relative',
                            borderRadius: 10,
                            background: '#171717c1',
                            height: 450,
                            top:40,
                        }}
                    >
                        {videos.map((data) => (
                        <SwiperSlide key={data.id} style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <div style={{
                                width: 45,
                                height: 45,
                                borderRadius: '50%',
                                background: 'red',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '65%',
                                left:'43%',
                                zIndex: 2,
                                cursor:'pointer',
                            }} onClick={() => {
                                setShowImg(!showimg);
                                setIsPlaying(data.id);
                                handlebtnPlay();
                            }}>
                            { showimg ? <FaPause size={20} /> : <FaPlay size={20} /> }
                            </div>
                            <div style={{
                            width: '100%',
                            height: '70%',
                            background:'grey',
                            }}>
                            {showimg ? <ReactPlayer
                                loop
                                key={data.id}
                                url={data.url}
                                controls={false}
                                onPlay={() => { setIsPlaying(data.id); }}
                                playing={isPlaying === data.id}
                                width={'100%'}
                                height={'100%'}
                                /> :
                                <img
                                src={data.img}
                                width={'100%'}
                                height={'100%'}
                                alt="sary"
                                style={{
                                    objectFit: 'cover',
                                    transformStyle:'preserve-3d'
                                }}
                                />
                            }
                            </div>
                            <div style={{
                            width: '100%',
                            height: '30%',
                            display: 'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            }}>
                            <div style={{
                                width: '90%',
                                height: '80%',
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 10,
                                marginBottom:20,
                            }}>
                                <div>
                                <div style={{
                                    fontSize:18,
                                }}>Nom: </div>
                                <div style={{
                                    fontSize:15,
                                    fontWeight:200,
                                }}>{data.nom}</div>
                                </div>
                                <div>
                                <div style={{
                                    fontSize:18,
                                }}>Description: </div>
                                <div style={{
                                    fontSize:15,
                                    fontWeight:200,
                                }}>{data.desc}</div>
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                  </div>
                <div className="content-right">
                    {selected ? 
                        <div onClick={handelClick} style={{
                            padding: '10px 30px',
                            background: '#0066ff',
                            fontSize: 15,
                            position: 'absolute',
                            bottom: 10,
                            right: 10,
                            borderRadius: 10,
                            cursor: 'pointer',
                        }}>
                            <span>Réserver</span>
                        </div>:null
                    }
                    <div className="header">
                        <div style={{margin:20, display:'flex'}}>
                          <span style={{fontSize:30}}>
                                <Swiper
                                    modules={[Pagination, Navigation]}
                                    navigation= {{
                                        nextEl: '.next',
                                        prevEl: '.prev',
                                    }}
                                    className='titleswiper'
                                >
                                    {
                                        calendrier.map((date, i) => (
                                            <SwiperSlide>
                                                <div key={i} style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    gap: 5,
                                                    cursor: 'pointer',

                                                }} onClick={()=>handleClick(date)}>
                                                    {date.title }
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                          </span>
                        </div>
                        <div className='datecalendar'>
                        {/* <div className='divider'></div>   */}
                        <div className="calendar">
                        <div className="prev"><SlArrowLeft size={15}/></div>
                            <Swiper
                                modules={[Pagination, Navigation]}
                                navigation= {{
                                    nextEl: '.next',
                                    prevEl: '.prev',}
                                }
                                className='myswiper'
                            >
                                {
                                    calendrier.map((date, i) => (
                                        <SwiperSlide>
                                            <div key={i} style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: 5,
                                                cursor: 'pointer',
                                            }} onClick={()=>handleClick(date)}>
                                            <span style={{fontSize:14,}}>{ date.date }</span>
                                            <span>
                                                <div className={
                                                        'dateactive'
                                                    }
                                                >{date.hour}</div>
                                            </span>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <div className="next"><SlArrowRight size={15} /></div>
                            </div>
                        </div>
                        <div className="personereserver">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                loop
                                autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="swiperslide"
                                slidesPerView={'auto'}
                            >
                                <SwiperSlide>Kennyh Sedera</SwiperSlide>
                                <SwiperSlide>Sedera Kennyh</SwiperSlide>
                                <SwiperSlide>Rasoanandrasana</SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div style={{fontSize:18, marginBlock:5}}>Reservastion de(s) place(s).</div>
                    <div className="contenright">
                        {places.map(item => (
                            <div key={item.id}  onClick={(() => {
                                setItem(item)
                                })} >
                                <PlaceView />
                            </div>
                        ))}
                    </div>
                    <div className="footerright">
                        <div className='contentfooter'>
                            <div className='place' style={{
                                background: 'grey' ,
                            }} />
                            Disponible.
                        </div>
                        <div className='contentfooter'>
                            <div className='place' style={{
                                background: 'red',
                            }} />
                            Réservée.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Reservation />
    </div>
  )
}

export default ReservationMasterClass