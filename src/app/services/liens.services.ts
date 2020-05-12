import { ObjetLien } from '../shared/structures';
import { BehaviorSubject } from 'rxjs';

export class LiensService {
    private liens: ObjetLien[];
    private liens$ : BehaviorSubject<ObjetLien[]>;

    constructor() {
        this.liens = [
            { url: '/', intitule: 'Accueil' },
            { url: '/detail', intitule: 'Details' }
          ];
          this.liens$ = new BehaviorSubject<ObjetLien[]>(this.liens);
    }

    public getLiens() : BehaviorSubject<ObjetLien[]> {
        return this.liens$;
    }

    public addLien(lien: ObjetLien) {
        console.log('addLien appelé avec', lien);
        // On vérifie que le lien et l'intitulé ne sont pas vides.
        // si c'est le cas, on ne fait rien.
        if ((lien.intitule.trim().length === 0) || (lien.url.trim().length === 0)) {
            return;
        }
        // On met à jour le tableau dans le service
        this.liens.push(lien);
        // On informe les abonnés au service de ce nouveau tableau
        this.liens$.next(this.liens);
    }
}