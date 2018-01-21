class Transcriptor {
    toRnaChar(dna) {
        if (dna == 'C') {
            return 'G';
        }

        if(dna == 'G') {
            return 'C';
        }

        if(dna == 'A') {
            return 'U';
        }

        if(dna == 'T') {
            return 'A';
        }

        throw new Error('Invalid input DNA.');
    }

    toRna(dna) {
        dna = dna.split("");
        return dna.map(this.toRnaChar).join('');
    }
}

export default Transcriptor;