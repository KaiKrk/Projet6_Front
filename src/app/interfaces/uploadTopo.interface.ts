export interface Topo {
  nameTopo: string;
  region: string;
  pays: string;
  fichierTopo: string;
  statutTopo: string;
}

export interface Secteur {
  nameSecteur: string;
  height: number;
}

export interface Voie {
  nameVoie: string;
  nameSecteur: string;
  difficulty: string;
  numberOfPoints: number;
}
