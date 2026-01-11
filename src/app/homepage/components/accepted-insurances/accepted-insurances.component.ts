import { Component } from '@angular/core';

@Component({
  selector: 'app-accepted-insurances',
  imports: [],
  templateUrl: './accepted-insurances.component.html',
  styleUrl: './accepted-insurances.component.scss'
})

export class AcceptedInsurancesComponent {

  public insurances: string[] = [
    'https://static.wixstatic.com/media/a93ef7_0aa869eac2a64cb598d131e9f323b6ec~mv2.png/v1/fill/w_150,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Aetna_logo_PNG1.png',
    'https://static.wixstatic.com/media/a93ef7_6ce130963d6d499884cb6c3695835a72~mv2.png/v1/fill/w_206,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BC-BS.png',
    'https://static.wixstatic.com/media/a93ef7_f883e8d65d9a42d094a529e2013dfb0c~mv2.png/v1/fill/w_142,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cigna.png',
    'https://static.wixstatic.com/media/a93ef7_3d77e4eaaf704e76a7437f24c42464d7~mv2.png/v1/fill/w_146,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CVS_Caremark_logo_svg.png',
    'https://static.wixstatic.com/media/a93ef7_9a88094463b64b24b1dae7540b5302bc~mv2.png/v1/fill/w_210,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Express%20Scripts.png',
    'https://static.wixstatic.com/media/a93ef7_b49d442a6f224aa7bff49d4c64ddb474~mv2.png/v1/fill/w_150,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Humana.png',
    'https://static.wixstatic.com/media/a93ef7_685888332b154557953c480cb3be51ef~mv2.png/v1/fill/w_142,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Medco.png'
  ];
  
  constructor() {}
}
