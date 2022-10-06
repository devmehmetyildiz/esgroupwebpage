import React, { useEffect } from 'react'
import images from '../../../assets/images'
import { motion } from "framer-motion"

export default function Index() {


    const frame_toleftslide = {
        initial: { x: 400 },
        viewport: { once: true },
        whileInView: { x: 0 },
        transition: { duration: 0.7 }
    }

    const frame_toRightslide = {
        initial: { x: -400 },
        viewport: { once: true },
        whileInView: { x: 0 },
        transition: { duration: 0.7 }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const withoustext = "Temelleri, 1971 tarihinde Kahramanmaraş’ın Küçük Sanayi Sitesi’nde yanmaz yapışmaz mutfak eşyalarının temel yapı taşı olarak nitelendirilebilecek olan alüminyum disk levha üretimi gerçekleştiren ESSAN METAL A.Ş.’ye dayanan ESLON MUTFAK EŞYALARI %100 yerli sermaye ile faaliyetlerine devam etmektedir"
    const withoustext1 = "35 yıllık tecrübenin ardından 2006 tarihinde kurumsal altyapısını geliştirmek ve üretim kapasitesini artırmak maksadı ile yeni yatırımlar yaparak Kahramanmaraş Organize Sanayi Sitesi’ndeki yeni adresine taşınan ESLON MUTFAK EŞYALARI günümüz itibari ile gerek imalat gerek ihracat konusunda şehrinin önde gelen aile şirketlerindendir."
    const withoustext2 = "İnovasyon konusunda global gelişmeleri yakından takip ederek yenilikçi olmayı ilke haline getirmiş olan ve kaliteli üretim noktasında taviz vermeden hedefleri doğrultusunda ilerlemeye devam eden ESLON MUTFAK EŞYALARI, 30.000 m2 alan üzerine kurulu 25.000 m2 kapalı alanda sürdürmekte olduğu faaliyetleri kapsamında sektörde sahip olduğu önemin farkında olan yöneticilerce idare edilmektedir."
    const withoustext3 = "Üretimin her aşamasında kaliteyi birinci öncelik olarak çalışanların bilincine yerleştiren ESLON MUTFAK EŞYALARI ISO-9001, ISO-14001 ve OHSAS-18001 sertifikaları ile kalite, çevre ve iş sağlığı ve güvenliği yönetimi konusunda dünya standartlarını uzun yıllar önce yakalamıştır. Öte yandan kurumsal sosyal sorumluluk kapsamında modern çağın gerekliliklerini yakından takip eden ve uygulayan firmamız katma değer yaratmaya devam etmektedir."
    const withoustext4 = "Günde 10.000 adet granit, seramik ve P.T.F.E (PFOA İçermez) kaplama ürün üretim kapasitesine sahip olan firmamız, verimliliği ve üretim kapasitesini artırmayı hedeflemekte ve halihazırda 27 ülkeye gerçekleştirmekte olduğu tava, tencere, kaserol, grill ve sosluk gibi ürünlerin ihracatını yeni pazarlara girerek genişletmeyi amaçlamaktadır."

    const quality = {
        title: "ISO 9001:2015",
        text: 'Avrupa Standardizasyon Komitesi (CEN – COMITÉ EUROPÉEN DE NORMALISATION)tarafından  verilen ISO 9001, bir Kalite Yönetim Sistemi belgesidir. Dünya genelinde kabul görmüş bu belge, değişen ve gelişen konjonktüre bağlı olarak revize edilmektedir.  Ürünün imal edilmesi ve ticarete konu olması aşamalarıdaki tüm operasyonel sürece ilişkin kalite alt yapısını ifade eden bu belge 2015 tarihinde revize edilmiştir (ISO 9001:2015).',
        text1: 'Bu kapsamda firmamız ESLON MUTFAK EŞYALARI, müşteri memnuniyeti odaklı imalat ve ticaret operasyonlarının her aşamasında dünya standartlarının gereksinimlerini karşılamıştır. Revize edilmiş son Kalite Yöntemi Sistemi sertifikasına sahip olan ESLON MUTFAK EŞYALARI, söz konusu operasyonel süreçlerde sürdürülebilir bir kalite yönetimi sistemi ile faaliyetlerine devam etmektedir.'
    }
    const quality1 = {
        title: "ISO 14001:2015",
        text: 'Ürünün imal edilmesinden tüketiciye ulaştırılmasına kadar geçen süreç içerisinde çevresel faktörlerin dikkate alındığını kanıtlar nitelikte olan ISO 14001 Çevre Yönetim Sistemi uluslar arası bir standarttır.  Bu standart sertifikası, üretim ve ticaret organizasyonunda tarafların çevresel farkındalıklara sahip olduğunu göstermektedir.',
        text1: 'Bu kapsamda tüm organizasyonlarında çevreye olan duyarlılığı ile ön plana çıkan firmamız ESLON MUTFAK EŞYALARI, söz konusu Çevre Yönetim Sistemi sertifikasının revize edilmiş son haline ( ISO 14001:2015) sahiptir. Başta toprak, su ve havaya olan zararın minimize edilmesi konusunda tüm tedbirleri alan firmamız dünya standartlarını gerekliliklerini yakından takip etmekte ve uygulamaktadır.'
    }
    const quality2 = {
        title: "OHSAS 18001:2007",
        text: 'İngiliz Standartlar Enstitüsü (BSI – British Standarts Institute) tarafından yayımlanan OHSAS bir İş Sağlığı ve Güvenliği sertifikasıdır. İş sağlığı ve güvenliğinin sistematik bir şekilde yönetilmesi ve geliştirilmesi maksadıyla yayımlanan bu sertifika kuruluşların yasal standartlara uyumunu ve iş ortamının daimi suretle geliştirilmesini ve iyileştirilmesini gösterir.',
        text1: 'Her alanda olduğu gibi iş sağlığı ve güvenliği alanında da dünya standartlarını uygulamakta olan firmamız ESLON MUTFAK EŞYALARI, sertifikanın revize edilmiş son haline (OHSAS 18001:2007) sahiptir. '
    }

    const socialtxt1 = " ‘Sürdürülebilir Kalkınma’ ibaresinin literatürde yer almaya başladığı dönemden bu yana önemi her geçen gün biraz daha artan ‘Kurumsal Sosyal Sorumluluk’ belirli etik değerleri korumaya yönelik çabaları ifade etmektedir.  Bir işletmenin çevresindeki faktörlere yönelik olan yükümlülükleri anlamına gelen ‘Kurumsal Sosyal Sorumluluk’u ‘Toplumun refahına katkıda bulunmaya teşvik eden ve bunu öngören politikalar, prosedürler ve aktivitelerin benimsenmesi’ olarak tanımlamak mümkündür."
    const socialtxt2 = "Ekonomik, hukuki, etik ve sosyal sorumlulukları gereği, sürdürülebilir bir verimliliği ve karlılığı, kanunlara uymayı, toplumun norm ve beklentilerine uygun davranmayı ve birçok gönüllü aktivitelerde bulunmayı devam ettiren firmamız ESLON MUTFAK EŞYALARI sosyal varlığının bilincindedir."


    return (
        <div className='pt-24 mb-12 flex flex-col justify-center items-center'>
            <div
                className='py-12 flex flex-col justify-center items-center mainbackground w-[100%]'>
                <h1 className='font-bold text-[#F6E5C1] text-5xl'>KURUMSAL</h1>
            </div>
            <div className='flex flex-col justify-center items-center py-4  w-2/3'>
                <motion.div
                    initial={{ x: 400 }}
                    //whileInView={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    animate={{ x: 0 }}
                >
                    <h1 className='text-4xl text-[#20002C] font-bold font-poppins'>HAKKIMIZDA</h1>
                </motion.div>
                <div className='border-2 bg-[#20002C] border-[#20002C] w-[100%] my-2' />
                <motion.div initial={{ x: 400 }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }}    >
                    <p className='py-2 text-lg text-gray-600 font-bold'>{withoustext}</p>
                </motion.div>
                <motion.div initial={{ x: 400 }} whileInView={{ x: 0 }} transition={{ duration: 0.7 }}    >
                    <p className='py-2 text-lg text-gray-600 font-bold'>{withoustext1}</p>
                </motion.div>
                <motion.div initial={{ x: 400 }} whileInView={{ x: 0 }} transition={{ duration: 1 }}    >
                    <p className='py-2 text-lg text-gray-600 font-bold'>{withoustext2}</p>
                </motion.div>
                <motion.div initial={{ x: 400 }} whileInView={{ x: 0 }} transition={{ duration: 1.2 }}    >
                    <p className='py-2 text-lg text-gray-600 font-bold'>{withoustext3}</p>
                </motion.div>
                <motion.div initial={{ x: 400 }} whileInView={{ x: 0 }} transition={{ duration: 1.4 }}    >
                    <p className='py-2 text-lg text-gray-600 font-bold'>{withoustext4}</p>
                </motion.div>
            </div>
            <div className='flex flex-col justify-center items-center py-4  w-2/3'>
                <h1 className='text-4xl text-[#20002C] font-bold font-poppins'>MİSYONUMUZ</h1>
                <div className='border-2 bg-[#20002C] border-[#20002C] w-[100%] my-2' />
                <ul className='list-disc py-4 text-gray-600 font-bold text-lg'>
                    <li className='py-2'>Üretimde kalite düzeyini daima artırmak                    </li>
                    <li className='py-2'>Global gelişmeleri yakından takip etmek</li>
                    <li className='py-2'>İnovasyon odaklı üretimi geliştirmek</li>
                    <li className='py-2'>Verimliliği en üst düzeyde tutmak</li>
                    <li className='py-2'>Kurumsal Sosyal Sorumluluğun gereklerini yerine  getirmek</li>
                    <li className='py-2'>Müşteri memnuniyetini maksimize etmek  </li>
                </ul>
            </div>
            <div className='flex flex-col justify-center items-center py-4  w-2/3'>
                <h1 className='text-4xl text-[#20002C] font-bold font-poppins'>VİZYONUMUZ</h1>
                <div className='border-2 bg-[#20002C] border-[#20002C] w-[100%] my-2' />
                <ul className='list-disc py-4 text-gray-600 font-bold text-lg'>
                    <li className='py-2'>Tüm dünya pazarlarında yer almak</li>
                    <li className='py-2'>Sektörümüze dair tüm organizasyonlara katılmak</li>
                    <li className='py-2'>Üretim kapasitesini artırmak</li>
                    <li className='py-2'>Çevresel farkındalıkları en üst düzeye çıkarmak</li>
                </ul>
            </div>
            <div className='flex flex-col justify-center items-center py-4  w-2/3'>
                <h1 className='text-4xl text-[#20002C] font-bold font-poppins'>ŞİRKETLERİMİZ</h1>
                <div className='border-2 bg-[#20002C] border-[#20002C] w-[100%] my-2' />
                <div className='flex flex-row justify-center items-center font-poppins'>
                    <div className='flex flex-col justify-center items-center py-2'>
                        <img className='w-64' src={images.eslonmutfak} alt="" />
                        <h1 className='font-bold text-xl text-black text-center w-[80%]'>ESLON MUTFAK EŞYALARI SAN. VE TİC. LTF. ŞTİ</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center py-2'>
                        <img className='w-64' src={images.eslonaliminyum} alt="" />
                        <h1 className='font-bold text-xl text-black text-center w-[80%]'>ESSAN ALÜMİNYUM BAK. MET. SAN. TİC. A.Ş.</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center py-2'>
                        <img className='w-64' src={images.eslonicdis} alt="" />
                        <h1 className='font-bold text-xl text-black text-center w-[80%]'>ESPORT İÇ DIŞ TİC. LTD. ŞTİ</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center py-4  w-2/3'>
                <h1 className='text-4xl text-[#20002C] font-bold font-poppins'>KALİTE KONTROL</h1>
                <div className='border-2 bg-[#20002C] border-[#20002C] w-[100%] my-2' />
                <h2 className='text-xl text-gray-600 pb-4 pt-8 font-bold font-poppins'>{quality.title}</h2>
                <p className='text-md text-gray-600 py-4 font-bold font-poppins'>{quality.text}</p>
                <p className='text-md text-gray-600 py-4 font-bold font-poppins'>{quality.text1}</p>
                <h2 className='text-xl text-gray-600 pb-4 pt-8 font-bold font-poppins'>{quality1.title}</h2>
                <p className='text-md text-gray-600 py-4 font-bold font-poppins'>{quality1.text}</p>
                <p className='text-md text-gray-600 py-4 font-bold font-poppins'>{quality1.text1}</p>
                <h2 className='text-xl text-gray-600 pb-4 pt-8 font-bold font-poppins'>{quality2.title}</h2>
                <p className='text-md text-gray-600 py-4 font-bold font-poppins'>{quality2.text}</p>
                <p className='text-md text-gray-600 py-4 font-bold font-poppins'>{quality2.text1}</p>
            </div>
            <div className='flex flex-col justify-center items-center py-4  w-2/3'>
                <motion.div {...frame_toleftslide}  >
                    <h1 className='text-4xl text-[#20002C] font-bold font-poppins'>SOSYAL SORUMLULUK</h1>
                </motion.div>
                <div className='border-2 bg-[#20002C] border-[#20002C] w-[100%] my-2' />
                <motion.div {...frame_toRightslide}>
                    <p className='py-2 text-lg text-gray-600 font-bold'>{socialtxt1}</p>
                    <p className='py-2 text-lg text-gray-600 font-bold'>{socialtxt2}</p>
                    <div className='w-[100%] flex justify-start items-start'>
                        <p className='py-2 text-lg text-gray-600 font-bold'>Bu kapsamda firmamız</p>
                    </div>
                    <ul className='list-disc py-4 text-gray-600 font-bold text-lg'>
                        <li className='py-2'>Toplumun, hayırsever yardımlar konusunda beklenti içerisinde olduğunu hatırlayarak,</li>
                        <li className='py-2'>Talep edilen gönüllü yardımları en iyi şekilde karşılayarak</li>
                        <li className='py-2'>Yönetici ve çalışanları ile birlikte çevreye karşı duyarlı olarak</li>
                        <li className='py-2'>Özel ve kamuya ait eğitim kurumlarına destek vererek</li>
                        <li className='py-2'>Gönüllü projelere katılmaya gayret göstererek, faaliyetlerine yükümlülüklerinin bilincinde olarak</li>
                    </ul>
                    <div className='w-[100%] flex justify-start items-start'>
                        <p className='py-2 text-lg text-gray-600 font-bold'>uzunca bir süredir gerçekleştirmekte olduğu faaliyetlerine süregelen tecrübeleri ile devam etmektedir.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
