self.equipamentos = ko.observableArray(todosEquipamentos);



self.equipamentosFiltered = ko.computed(function () {
    return self.equipamentos().filter(
        function (equipamento) {

            searchNome = "coluna";
            pre�oMaximo = 100
            pre�oMinimo = 0

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

            pre�oMaximo = 200
            pre�oMinimo = 100

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

            pre�oMaximo = 300
            pre�oMinimo = 200

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

            pre�oMaximo = 500
            pre�oMinimo = 300

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

            pre�oMinimo = 500


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
