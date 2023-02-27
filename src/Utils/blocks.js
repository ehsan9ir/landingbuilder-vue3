import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const faqs = [
    {
        uuid: uuidv4(),
        question: 'چاق نیستم فقط شکم دارم؟',
        answer: 'رژیمی وجود نداره که فقط یک بخش از بدن رو لاغر کنه اما در طول رژیم بیشترین حجم چربی از شکم و پهلو کم میشه.',
    },
    {
        uuid: uuidv4(),
        question: 'آیا رژیم باعث ریزش مو میشه؟',
        answer: 'نگران نباش در طول رژیم هیچ ماده غذایی حذف نمیشه ولی در صورت ریزش مو می تونید از مولتی ویتامین مینرال استفاده کنید.',
    },
    {
        uuid: uuidv4(),
        question: 'چیکار کنم که بعد از رژیم پوستم خراب نشه؟',
        answer: 'ورزش کردن و مصرف آب زیاد در طول رژیم از چروک پوست جلوگیری می کنه',
    },
    {
        uuid: uuidv4(),
        question: 'اگه در دوران رژیم باردار شدم چکار کنم؟',
        answer: 'در صورت بارداری وضعیت رژیم شما به رژیم بارداری تغییر میکنه و در طول رژیم بارداری تمام مواد مورد نیاز مادر و جنین در نظر گرفته شده',
    },
    {
        uuid: uuidv4(),
        question: 'تو دوره‌ی رژیم چقدر لاغر می‌شیم؟',
        answer: 'تو این دوره‌ی سه ماهه می‌تونی انتظار 12 کیلو کاهش وزن رو داشته باشی. دو هفته‌ی اول بیشترین مقدار کاهش وزن اتفاق می‌افته که دلیلش کاهش وزن آب بدنه که به مرور روندش کندتر می‌شه.',
    },
    {
        uuid: uuidv4(),
        question: 'چه کسانی می‌تونن رژیم بگیرن؟',
        answer: 'تمام افراد بالای 12 سال و زیر 70 سال می‌تونن رژیم بگیرن.',
    },
    {
        uuid: uuidv4(),
        question: 'چه کسانی نمی‌تونن رژیم بگیرن؟',
        answer: 'افراد زیر 12 سال، بالای 70 سال، افراد مبتلا به دیابت نوع 1، افرادی که کم خونی شدید دارن، زنانی که تو 6 ماه اول شیردهی هستن، افراد دیالیزی، کسانی که عارضه‌ی دفع پروتئین دارن و یا در حال گذروندن دوره‌ی شیمی درمانی هستن، نباید رژیم بگیرن.',
    },
    {
        uuid: uuidv4(),
        question: 'آیا محدودیت غذایی تو رژیم وجود داره؟',
        answer: 'خیر. هیچ محدودیت غذایی تو رژیم دکتر کرمانی وجود نداره. از دیزی تا سوشی هر غذایی دلت خواست تو رژیمت هست.',
    }
]
const groups = ref([
    {
        uuid: uuidv4(),
        title: 'Header',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'Header',
                model: 'Header',
                componentName: 'Header',
                optionsComponentName: 'HeaderOptions',
                description: 'Header',
                thumbUrl: '/images/thumbs/v1/header/header.jpg',
                data: {
                    mainBackgroundColor: '#F5F8FE',
                    backgroundColor: '#3F2A6F',
                    imageUrl: '/images/samples/v1/header/header.png',
                    hasHeaderBottom: true,
                    buttonText: 'ثبت نام و دریافت برنامه غذایی',
                    buttonBackgroundColor: '#FF5757',
                    buttonColor: '#FFFFFF',
                    buttonLink: '#cta',
                }
            }
        ]
    },
    {
        uuid: uuidv4(),
        title: 'Leaders',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'Leaders',
                model: 'Leaders',
                componentName: 'Leaders',
                optionsComponentName: 'LeadersOptions',
                description: 'Leaders',
                thumbUrl: '/images/thumbs/v1/Leaders/Leaders.png',
                data: {
                    backgroundColor: '#F5F8FE',
                    title: 'قهرمانان دکتر کرمانی',
                    titleImage: '/images/samples/v1/leaders/titleImage.svg',
                    list: [
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/leaders/hajilo.png',
                            name: 'زهره حاجیلو',
                            weightChange: 12,
                        },
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/leaders/hajizadeh.png',
                            name: 'سمیرا حاجیزاده',
                            weightChange: 21,
                        },
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/leaders/shayanfar.png',
                            name: 'مریم شایان فر',
                            weightChange: 38.5,
                        },
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/leaders/bahrami.png',
                            name: 'سپیده بهرامی',
                            weightChange: 30,
                        },
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/leaders/mahdavian.png',
                            name: 'اکبر مهدویان',
                            weightChange: 24,
                        }
                    ]
                }
            }
        ]
    },
    {
        uuid: uuidv4(),
        title: 'Video',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'Video',
                model: 'Video',
                componentName: 'Video',
                optionsComponentName: 'VideoOptions',
                description: 'Video',
                thumbUrl: '/images/thumbs/v1/video/video.png',
                data: {
                    title: '',
                    blockBackgroundColor: '#F5F8FE',
                    videoTitle: 'داستان کسانی که\nبه بهشت رسیدند',
                    posterUrl: '/images/samples/v1/video/poster.jpg',
                    videoUrl: 'https://behandam.kermany.com/medyar-service/public/storage/1596/545a76aeeb6a5899219cc2e4dd3cb859ecf0eaa5.mp4',
                    buttonText: 'منم میخوام خوش اندام بشم',
                    buttonBackgroundColor: '#1ABC9C',
                    buttonColor: '#FFFFFF',
                    buttonLink: '#cta',
                    videoBackgroundColor: '#E5EBF8',
                    titleColor: '#212121',
                    playIconBackgroundColor: '#FF5757',
                    playIconColor: '#FFFFFF',
                }
            }
        ]
    },
    {
        uuid: uuidv4(),
        title: 'FAQ',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'faq',
                model: 'list',
                componentName: 'FAQList',
                optionsComponentName: 'FAQListOptions',
                description: 'List',
                thumbUrl: '/images/thumbs/v1/faq/list.png',
                data: {
                    title: 'سوالات متداول',
                    blockBackgroundColor: '#F5F8FE',
                    list: faqs
                }
            },
            {
                uuid: uuidv4(),
                type: 'faq',
                model: 'collapse',
                componentName: 'FAQCollapse',
                optionsComponentName: 'FAQCollapseOptions',
                description: 'Collapse',
                thumbUrl: '/images/thumbs/v1/faq/collapse.png',
                data: {
                    blockBackgroundColor: '#F5F8FE',
                    title: 'سوالات متداول',
                    list: faqs
                }
            },
        ]
    },
    {
        uuid: uuidv4(),
        title: 'DietProperty',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'DietProperty',
                model: 'DietProperty',
                componentName: 'DietProperty',
                optionsComponentName: 'DietPropertyOptions',
                description: 'DietProperty',
                thumbUrl: '/images/thumbs/v1/diet-property/diet-property.png',
                data: {
                    title: 'ویژگی‌های\n برنامه غذایی',
                    blockBackgroundColor: '#3F2A6F',
                    titleColor: '#FFFFFF',
                    list: [
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/diet-property/support.svg',
                            title: 'پشتیبانی\nکارشناس تغذیه'
                        },
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/diet-property/size.svg',
                            title: '10 تا 12 سانت\nکاهش سایز'
                        },
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/diet-property/weight.svg',
                            title: '10 تا 12 کیلو\nکاهش وزن'
                        },
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/diet-property/personality.svg',
                            title: 'رژیم 3 ماهه\nمتناسب با'
                        },
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/diet-property/food.svg',
                            title: 'بدون\nمحدودیت غذایی'
                        },
                    ]
                }
            }
        ]
    },
    {
        uuid: uuidv4(),
        title: 'OurTeam',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'OurTeam',
                model: 'OurTeam',
                componentName: 'OurTeam',
                optionsComponentName: 'OurTeamOptions',
                description: 'OurTeam',
                thumbUrl: '/images/thumbs/v1/our-team/our-team.png',
                data: {
                    title: 'کارشناسان دکتر کرمانی\nکنارت هستن',
                    blockBackgroundColor: '#F5F8FE',
                    titleColor: '#212121',
                    list: [
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/our-team/gandomkar.png',
                            title: 'فاطمه گندمکار',
                            description: 'مصمم و خندونه،\nراهتو روشن می‌کنه',
                            color: 'blue'
                        },
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/our-team/seifi.png',
                            title: 'فاطمه سیفی',
                            description: 'حامی و شنونده‌س،\nهواتو داره',
                            color: 'orange'
                        },
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/our-team/karimi.png',
                            title: 'سمانه کریمی',
                            description: 'پیگیره و دقیق؛ باهاش\nنگران شکستن رژیمت نباش',
                            color: 'yellow'
                        },
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/our-team/dehdashtpor.png',
                            title: 'زینب دهدشت پور',
                            description: 'قوی و با اراده‌س،\nدستتو می‌گیره',
                            color: 'blue'
                        },
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/our-team/khoshnejad.png',
                            title: 'فاطمه خوش نژاد',
                            description: 'یه حرفه‌ایِ آرومه،\nباهاش نتیجه میگیری',
                            color: 'orange'
                        },
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/our-team/solatpor.png',
                            title: 'زهرا صولت پور',
                            description: 'خوش‌بین و گرمه،\nحمایتت میکنه',
                            color: 'yellow'
                        },
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/our-team/mozafari.png',
                            title: 'ریحانه مظفری',
                            description: 'مهربونه؛\nتا انتهای مسیر همراهته',
                            color: 'blue'
                        },
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/our-team/dalir.png',
                            title: 'سیما دلیر',
                            description: 'صبور و خوش‌صحبته،\nسر ذوقت میاره',
                            color: 'orange'
                        },
                        {
                            uuid: uuidv4(),
                            image: '/images/samples/v1/our-team/norozi.png',
                            title: 'مهسا نوروزی',
                            description: 'مشتاق و با حوصله‌س،\nلاغری باهاش تضمینیه',
                            color: 'yellow'
                        },
                    ]
                }
            }
        ]
    },
    {
        uuid: uuidv4(),
        title: 'Footer',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'Footer',
                model: 'Footer',
                componentName: 'Footer',
                optionsComponentName: 'FooterOptions',
                description: 'Footer',
                thumbUrl: '/images/thumbs/v1/footer/footer.png',
                data: {
                    mainBackgroundColor: '#F5F8FE',
                    backgroundColor: '#3F2A6F',
                    hasFooterTop: true
                }
            }
        ]
    },
    {
        uuid: uuidv4(),
        title: 'CTA',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'CTA',
                model: 'CTA',
                componentName: 'CTA',
                optionsComponentName: 'CTAOptions',
                description: 'CTA',
                thumbUrl: '/images/thumbs/v1/cta/cta.png',
                data: {
                    mainBackgroundColor: '#F5F8FE',
                    imageUrl: '/images/samples/v1/cta/150x150.png',
                    backgroundColor: '#3F2A6F',
                    buttonText: 'ثبت نام و دریافت برنامه غذایی',
                    buttonBackgroundColor: '#FF5757',
                    buttonColor: '#FFFFFF',
                    buttonLink: 'https://behandam.kermany.com/',
                }
            }
        ]
    },

    {
        uuid: uuidv4(),
        title: 'Heroes',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'hero',
                model: 'image-left',
                componentName: 'HeroImageLeft',
                optionsComponentName: 'HeroImageLeftOptions',
                description: 'Image left',
                thumbUrl: '/images/thumbs/v1/heroes/image-right.png',
                data: {
                    darkMode: false,
                    title: 'Compeling title about your product!!!',
                    subtitle: 'Describe the main benefit you product delivers to your customers.',
                    imageUrl: '/images/samples/v1/heros/cover.png',
                    buttonText: 'Buy NOW!!!',
                    buttonLink: 'https://google.com',
                }
            },
            {
                uuid: uuidv4(),
                type: 'hero',
                model: 'form-left',
                componentName: 'HeroFormLeft',
                optionsComponentName: 'HeroFormLeftOptions',
                description: 'Form left',
                thumbUrl: '/images/thumbs/v1/heroes/form-right.png',
                data: {
                    darkMode: false,
                    title: 'Compeling title about your product!!!',
                    subtitle: 'Describe the main benefit you product delivers to your customers.',
                    buttonText: 'I want a copy!!!',
                }
            },
            {
                uuid: uuidv4(),
                type: 'hero',
                model: 'video-center',
                componentName: 'HeroVideoCenter',
                optionsComponentName: 'HeroVideoCenterOptions',
                description: 'Video center',
                thumbUrl: '/images/thumbs/v1/heroes/video-center.png',
                data: {
                    darkMode: false,
                    title: 'Compeling title about your product!!!',
                    subtitle: 'Describe the main benefit you product delivers to your customers.',
                    youtubeVideoCode: '5DVDewOReoY',
                }
            },
        ]
    },
    {
        uuid: uuidv4(),
        title: 'Features',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'features',
                model: 'grid-3',
                componentName: 'FeaturesGrid3',
                optionsComponentName: 'FeaturesGrid3Options',
                description: 'Grid 3x1',
                thumbUrl: '/images/thumbs/v1/features/grid-3.png',
                data: {
                    darkMode: false,
                    title: 'Main benefits',
                    list: [
                        {
                            uuid: uuidv4(),
                            title: 'Features 1',
                            description: 'Description of features 1 should go here, ideally no more than 50 lines'
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Features 2',
                            description: 'Description of features 1 should go here, ideally no more than 50 lines'
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Features 3',
                            description: 'Description of features 1 should go here, ideally no more than 50 lines'
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Features 4',
                            description: 'Description of features 1 should go here, ideally no more than 50 lines'
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Features 5',
                            description: 'Description of features 1 should go here, ideally no more than 50 lines'
                        },
                    ]
                }
            },
            {
                uuid: uuidv4(),
                type: 'features',
                model: 'grid-3-model2',
                componentName: 'FeaturesGrid3Model2',
                optionsComponentName: 'FeaturesGrid3Model2Options',
                description: 'Grid 3x1 Model2',
                thumbUrl: '/images/thumbs/v1/features/grid-3.png',
                data: {
                    darkMode: true,
                    title: 'رژیم برتر',
                    list: [
                        {
                            uuid: uuidv4(),
                            title: 'Features 1',
                            description: 'Description of features 1 should go here, ideally no more than 50 lines',
                            color: "#ffffff"
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Features 2',
                            description: 'Description of features 2 should go here, ideally no more than 50 lines',
                            color: "#ff0000"
                        }
                    ]
                }
            },
        ]
    },
    {
        uuid: uuidv4(),
        title: 'Authors',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'author',
                model: 'image-left',
                componentName: 'AuthorImageLeft',
                optionsComponentName: 'AuthorImageLeftOptions',
                description: 'Image Left',
                thumbUrl: '/images/thumbs/v1/authors/image-left.png',
                data: {
                    darkMode: false,
                    title: 'About the author',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, itaque doloribus earum nostrum iste nesciunt excepturi neque eius, numquam alias eos, delectus quo illum eaque consequuntur consectetur! Sequi soluta porro, magni possimus a tempore quas rem commodi aut pariatur quaerat natus sunt, nihil voluptate maxime beatae atque assumenda similique!',
                    imageUrl: '/images/samples/v1/authors/sample.jpg'
                }
            },
        ]
    },
    {
        uuid: uuidv4(),
        title: 'Buy',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'buy',
                model: 'simple',
                componentName: 'BuySimple',
                optionsComponentName: 'BuySimpleOptions',
                description: 'Simple',
                thumbUrl: '/images/thumbs/v1/buy/simple.png',
                data: {
                    darkMode: true,
                    title: 'Secure you copy right NOW!',
                    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ex.',
                    buttonLink: 'https://google.com',
                    buttonText: 'Buy NOW',
                }
            },
        ]
    },
    {
        uuid: uuidv4(),
        title: 'Chapters',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'chapters',
                model: 'collapse',
                componentName: 'ChaptersCollapse',
                optionsComponentName: 'ChaptersCollapseOptions',
                description: 'Collapse',
                thumbUrl: '/images/thumbs/v1/chapters/collapse.png',
                data: {
                    darkMode: false,
                    title: 'The Chapters',
                    imageUrl: '/images/samples/v1/chapters/ebook-cover.png',
                    list: [
                        {
                            uuid: uuidv4(),
                            title: 'Chapter 1 - Lorem ipsum dolor sit amet',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Chapter 2 - Lorem ipsum dolor sit amet',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Chapter 3 - Lorem ipsum dolor sit amet',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Chapter 4 - Lorem ipsum dolor sit amet',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Chapter 5 - Lorem ipsum dolor sit amet',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                        },
                    ]
                }
            },
        ]
    },
    {
        uuid: uuidv4(),
        title: 'Guarantees',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'guarantee',
                model: '7-days',
                componentName: 'Guarantee7Days',
                optionsComponentName: 'Guarantee7DaysOptions',
                description: '7 Days',
                thumbUrl: '/images/thumbs/v1/guarantee/7-days.png',
                data: {
                    darkMode: false,
                    title: 'Garantia Incondicional de 7 Dias',
                    description: 'Esse ebook é tudo que você precisa para começar a vender online e construir uma renda passiva mensal que trabalha 24h por dia, 7 dias por semana automaticamente enquanto vocẽ dorme.',
                    imageUrl: '/images/samples/v1/guarantee/7-days.png',
                }
            },
            {
                uuid: uuidv4(),
                type: 'guarantee',
                model: '10-days',
                componentName: 'Guarantee10Days',
                optionsComponentName: 'Guarantee10DaysOptions',
                description: '10 Days',
                thumbUrl: '/images/thumbs/v1/guarantee/10-days.png',
                data: {
                    darkMode: false,
                    title: 'Garantia Incondicional de 10 Dias',
                    description: 'Esse ebook é tudo que você precisa para começar a vender online e construir uma renda passiva mensal que trabalha 24h por dia, 10 dias por semana automaticamente enquanto vocẽ dorme.',
                    imageUrl: '/images/samples/v1/guarantee/10-days.png',
                }
            },
            {
                uuid: uuidv4(),
                type: 'guarantee',
                model: '15-days',
                componentName: 'Guarantee15Days',
                optionsComponentName: 'Guarantee15DaysOptions',
                description: '15 Days',
                thumbUrl: '/images/thumbs/v1/guarantee/15-days.png',
                data: {
                    darkMode: false,
                    title: 'Garantia Incondicional de 15 Dias',
                    description: 'Esse ebook é tudo que você precisa para começar a vender online e construir uma renda passiva mensal que trabalha 24h por dia, 15 dias por semana automaticamente enquanto vocẽ dorme.',
                    imageUrl: '/images/samples/v1/guarantee/15-days.png',
                }
            },
            {
                uuid: uuidv4(),
                type: 'guarantee',
                model: '30-days',
                componentName: 'Guarantee30Days',
                optionsComponentName: 'Guarantee30DaysOptions',
                description: '30 Days',
                thumbUrl: '/images/thumbs/v1/guarantee/30-days.png',
                data: {
                    darkMode: false,
                    title: 'Garantia Incondicional de 30 Dias',
                    description: 'Esse ebook é tudo que você precisa para começar a vender online e construir uma renda passiva mensal que trabalha 24h por dia, 30 dias por semana automaticamente enquanto vocẽ dorme.',
                    imageUrl: '/images/samples/v1/guarantee/30-days.png',
                }
            },
        ]
    }
])

export default {
    groups
}
