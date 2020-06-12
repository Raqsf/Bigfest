self.equipamentos = ko.observableArray(todosEquipamentos);



self.equipamentosFiltered = ko.computed(function () {
    return self.equipamentos().filter(
        function (equipamento) {

            searchNome = "coluna";
            preçoMaximo = 100
            preçoMinimo = 0

            if (equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            preçoMaximo = 200
            preçoMinimo = 100

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            preçoMaximo = 300
            preçoMinimo = 200

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            preçoMaximo = 500
            preçoMinimo = 300

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            preçoMinimo = 500


            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;

            if (precoMinimo < equipamento['preco'] < precoMaximo && equipamento['nome'].indexOf(searchNome) >= 0) {
                return true;
            }
            return false;
        }
    );
});
