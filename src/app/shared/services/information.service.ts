import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor() { }


  experiences: { [id: number]: Experience } = {
    0: {
      id: 0,
      title: 'AUTOMOTIVE BUILDS',
      thumbnailPhoto: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds',
      imageUrls: [
        'https://lumiere-a.akamaihd.net/v1/images/pp_cars_homepage_og_socialimage_v3_ff52d8b4.jpeg?region=0%2C0%2C1200%2C630',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/1948_Tucker_Torpedo_8511815871.jpg/1200px-1948_Tucker_Torpedo_8511815871.jpg',
        'https://driveshare.com/files/car_images/11100/1717989957_php666672455bd79.jpg.full.jpg?t=1719887552'
      ],
      description: [
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        `Et reprehenderit facilis cum distinctio nisi et mollitia necessitatibus et cumque accusantium ea assumenda minus. Ut ratione dolorum sit provident quos sed quasi reprehenderit.`
      ]
    },
    1: {
      id: 1,
      title: 'MAC UNIVERSE',
      thumbnailPhoto: 'https://bgr.com/wp-content/uploads/2021/06/prime-day-apple-devices.jpg?quality=82&strip=al',
      imageUrls: [
        'https://content.fosterandpartners.com/api/media/getCroppedImage?imagePath=/media/uvypar0q/hero-1859-fp707753.jpg&width=1200&height=630&crop=true',
        'https://s.yimg.com/ny/api/res/1.2/Im6A4yfRDEy4XXSUEGeOZg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD05MzI-/https://media.zenfs.com/en/insider_articles_922/12f374c1f434fc3da51c2054947b66b0'
      ],
      description: [
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        `Et reprehenderit facilis cum distinctio nisi et mollitia necessitatibus et cumque accusantium ea assumenda minus. Ut ratione dolorum sit provident quos sed quasi reprehenderit.`
      ]
    },
    2: {
      id: 2,
      title: 'UNIVERSAL',
      thumbnailPhoto: 'https://res.cloudinary.com/simpleview/image/upload/v1612197440/clients/anaheimca/uni_studios_hollywood_max_res_default2_3f15e0a6-8283-470c-8870-1f2a89c02952.jpg',
      imageUrls: [
        'https://orlandoinformer.com/wp-content/uploads/2023/08/Universal-Studios-Florida-Arches.png',
        'https://media.cnn.com/api/v1/images/stellar/prod/140123085122-harry-potter-diagon-alley.jpg?q=x_39,y_30,h_1224,w_2176,c_crop/w_800',
        'https://www.motortrend.com/uploads/2023/10/005-back-to-the-future-delorean-facts-7.jpg?w=768&width=768&q=75&format=webp'
      ],
      description: [
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        `Et reprehenderit facilis cum distinctio nisi et mollitia necessitatibus et cumque accusantium ea assumenda minus. Ut ratione dolorum sit provident quos sed quasi reprehenderit.`
      ]
    },
    3: {
      id: 3,
      title: 'DISNEY',
      thumbnailPhoto: 'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1349/464/75/dam/disneyland/attractions/disneyland/sleeping-beauty-castle-walkthrough/sleeping-beauty-castle-exterior-16x9.jpg?1732215655423',
      imageUrls: [
        'https://upload.wikimedia.org/wikipedia/commons/3/32/Walt_Disney_Studios_Alameda_Entrance.jpg',
        'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/treasure/Disney_Treasure-w-Disclosure-UPDATE-16x9-16x9.jpg?2023-08-25T14:58:51+00:00',
        'https://cdn.arstechnica.net/wp-content/uploads/2020/02/Unreal-Star-Wars-set-with-people.png'
      ],
      description: [
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        `Et reprehenderit facilis cum distinctio nisi et mollitia necessitatibus et cumque accusantium ea assumenda minus. Ut ratione dolorum sit provident quos sed quasi reprehenderit.`
      ]
    },
    4: {
      id: 4,
      title: 'TECH CONSULTING',
      thumbnailPhoto: 'https://peakbusinessvaluation.com/wp-content/uploads/How-To-Value-A-Consulting-Firm-scaled.jpg',
      imageUrls: [
        'https://images1.showcase.com/i2/E1SWTjwy_uuvHUgMpsaipidOuaMg8wGxqiDrhrt5h7Y/116/image.jpg',
        'https://www.pwc.com/content/dam/pwc/cz/cs/assets/technology_consulting_header_iStock-943067460.jpg'
      ],
      description: [
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        `Et reprehenderit facilis cum distinctio nisi et mollitia necessitatibus et cumque accusantium ea assumenda minus. Ut ratione dolorum sit provident quos sed quasi reprehenderit.`
      ]
    },
  };


  services: { [id: number]: Service } = {
    0: {
      id: 0,
      title: 'REQUEST REFILL',
      thumbnailPhoto: 'https://media.istockphoto.com/id/1153451679/photo/after-compounding-a-medication-a-pharmacist-packages-the-bottle.jpg?s=612x612&w=0&k=20&c=uTUUMju4CZSB7GQdE8PgplJaK95DrRLmXj30fwa0sBQ=',
      imageUrls: [
        'https://www.theamegroup.com/wp-content/uploads/2018/09/it-consulting-companies.jpeg',
        'https://www.orionnetworks.net/wp-content/uploads/2021/11/IT-Consulting-Services-2-.jpg'
      ],
      shortDescription: 'Let us know if you need a prescription refilled and we will take care of the rest.',
      description: [
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        `Et reprehenderit facilis cum distinctio nisi et mollitia necessitatibus et cumque accusantium ea assumenda minus. Ut ratione dolorum sit provident quos sed quasi reprehenderit.`
      ]
    },
    1: {
      id: 1,
      title: 'TRANSFER RX',
      thumbnailPhoto: 'https://mycrystallakepharmacy.com/wp-content/uploads/2025/07/How-to-Transfer-From-One-Pharmacy-to-Another.webp',
      imageUrls: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgt94acSvnKD3daEf-LARe8YojZ4QAh7OmQ&s',
        'https://bernardmarr.com/img/10%20Amazing%20Examples%20of%20Robotic%20Process%20Automation%20in%20Practice.png'
      ],
      shortDescription: 'Transfer a prescription from your old pharmacy to RaMa Drugs. All we need is the pharmacy and prescription info.',
      description: [
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        `Et reprehenderit facilis cum distinctio nisi et mollitia necessitatibus et cumque accusantium ea assumenda minus. Ut ratione dolorum sit provident quos sed quasi reprehenderit.`
      ]
    },
    2: {
      id: 2,
      title: 'ASK A PHARMACIST',
      thumbnailPhoto: 'https://www.iwpharmacy.com/hubfs/Pharmacist%20consulting%20with%20patient.jpg',
      imageUrls: [
        'https://cdn.prod.website-files.com/615243a00511f95546e9f148/62e1a7c07f1cb40f6cc2e666_shutterstock_1540480613_60efe0fcb241534a650546c019092392_2000.jpeg',
        'https://cdn.mos.cms.futurecdn.net/ifycXFxFrobEJng59xnQB5.jpg'
      ],
      shortDescription: 'Our trained pharmacists are ready to answer any questions you may have.',
      description: [
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        `Et reprehenderit facilis cum distinctio nisi et mollitia necessitatibus et cumque accusantium ea assumenda minus. Ut ratione dolorum sit provident quos sed quasi reprehenderit.`
      ]
    },
  }

  additionalServices: { [id: number]: Service } = {
    0: {
      id: 0,
      title: 'FREE DELIVERY',
      thumbnailPhoto: 'https://media.istockphoto.com/id/1469686707/photo/delivery-worker-hands-holding-medications-parcel.jpg?s=612x612&w=0&k=20&c=XwgJ2dcED8EClXuo-Ik24hbmF5P5SvFvJnETfw0LHzU=',
      imageUrls: [
        'https://lumiere-a.akamaihd.net/v1/images/pp_cars_homepage_og_socialimage_v3_ff52d8b4.jpeg?region=0%2C0%2C1200%2C630',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/1948_Tucker_Torpedo_8511815871.jpg/1200px-1948_Tucker_Torpedo_8511815871.jpg',
        'https://driveshare.com/files/car_images/11100/1717989957_php666672455bd79.jpg.full.jpg?t=1719887552'
      ],
      shortDescription: 'RaMa Drugs will deliver your prescriptions to your doorstep at no extra charge!',
      description: [
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        `Et reprehenderit facilis cum distinctio nisi et mollitia necessitatibus et cumque accusantium ea assumenda minus. Ut ratione dolorum sit provident quos sed quasi reprehenderit.`
      ]
    },
    1: {
      id: 1,
      title: 'ALL OVER-THE-COUNTER NEEDS',
      thumbnailPhoto: 'https://media.istockphoto.com/id/537983513/photo/everything-for-your-ailments.jpg?s=612x612&w=0&k=20&c=WZTW2M2HhL1iP3EsXfeltaxeTK74fDAbOGvMl1nrBBk=',
      imageUrls: [
        'https://greenurbane.com/wp-content/uploads/19.-advisory-services-1-scaled.jpg',
        'https://tax.thomsonreuters.com/blog/wp-content/uploads/sites/17/2022/04/How-to-Confidently-Implement-Strategic-Advisory-Services-and-Get-Your-Boss-On-Board-scaled.jpeg'
      ],
      shortDescription: 'Antacids, Antiemetics, Antihistamines, Cough Suppressants, Decongestants, Pain Relievers, Vitamins And more...',
      description: [
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        `Et reprehenderit facilis cum distinctio nisi et mollitia necessitatibus et cumque accusantium ea assumenda minus. Ut ratione dolorum sit provident quos sed quasi reprehenderit.`
      ]
    },
    2: {
      id: 2,
      title: 'ON-CALL PHARMACISTS',
      thumbnailPhoto: 'https://t4.ftcdn.net/jpg/02/53/70/83/360_F_253708368_pib65h7OnaIL4rkjCeCWMr8sRwIZqYhW.jpg',
      imageUrls: [
        'https://discover.rbcroyalbank.com/wp-content/uploads/Brain_3_Banner-small_402x.jpg'
      ],
      shortDescription: 'RaMa Drugs has dedicated pharmacists on call to answer your questions 24/7',
      description: [
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        `Et reprehenderit facilis cum distinctio nisi et mollitia necessitatibus et cumque accusantium ea assumenda minus. Ut ratione dolorum sit provident quos sed quasi reprehenderit.`
      ]
    },
  }

  // Experiences
  getAllExperiences(): Experience[] {
    return Object.values(this.experiences).sort((a, b) => a.id - b.id);
  }

  getExperienceData(id: number) {
    return this.experiences[id];
  }


  // Services
  getAllServicesData(): Service[] {
    return Object.values(this.services).sort((a, b) => a.id - b.id);
  }

  getServiceData(id: number) {
    return this.services[id];
  }

  
  // Additional Services
  getAllAdditionalServicesData(): Service[] {
    return Object.values(this.additionalServices).sort((a, b) => a.id - b.id);
  }

  getAdditionalServiceData(id: number) {
    return this.additionalServices[id];
  }
}
