/*=========================================================================================================================================================
 *
 *  PROJETO OSC MAGENTO BRASIL - VERS�O FINAL V3.0
 *  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *  O m�dulo One Step Checkout normatizado para a localiza��o brasileira.
 *  site do projeto: http://onestepcheckout.com.br/
 *  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *
 *
 *
 *  Mmantenedores do Projeto:
 *  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *
 *  Deivison Arthur Lemos Serpa
 *  deivison.arthur@gmail.com
 *  www.deivison.com.br
 *  (21)9203-8986
 *
 *  Denis Colli Spalenza
 *  http://www.xpdev.com.br
 *
 *  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *
 *
 *
 *  GOSTOU DO M�DULO?
 *  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *  Se voc� gostou, se foi �til para voc�, se fez voc� economizar aquela grana pois estava prestes a pagar caro por aquele m�dulo pago, pois n�o achava uma
 *  solu��o gratuita que te atendesse e queira prestigiar o trabalho feito efetuando uma doa��o de qualquer valor, n�o vou negar e vou ficar grato! voc�
 *  pode fazer isso visitando a p�gina do projeto em: http://onestepcheckout.com.br/
 *  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *
/*=========================================================================================================================================================
 */






        $j(document).ready(function(){





            /*Limita os campos da data nascimento*/
            $j('input[name*="day"]').attr('maxlength','2');
            $j('input[name*="month"]').attr('maxlength','2');
            $j('input[name*="year"]').attr('maxlength','4');
            $j('input[name*="postcode"]').attr('maxlength','8');

/*===================================================== Click ===========================================================*/
            /*Roda o clique para selecionar o tipo pessoa*/
            $j('input[name*="tipopessoa"]').click( function(){

                var existe;

                /*Pega do click tipo pessoa*/
                queme = this.value;

                /*Verifica se existe o Taxvat*/
                existe = $j('input[name*="taxvat"]').length;

                if(queme == 'Fisica'){

                  /*fisica*/
                    /*Se existe o Taxvat alterna entre eles mudando o name conforme selecionado o tipo pessoa*/
                    if( existe != ''){

                        /*CADASTRO*/
                        $j('input[name="taxvat-old"]').attr('name', 'taxvat');
                        $j('input[name="taxvat"]:eq(1)').attr('name', 'taxvat-old');

                        $j('input[name="taxvat-old"]').attr('class', 'input-text');
                        $j('input[name="taxvat"]').attr('class', 'validar_cpfcnpj input-text');

                        /*BILLING*/
                        $j('input[name="billing[taxvat-old]"]').attr('name', 'billing[taxvat]');
                        $j('input[name="billing[taxvat]"]:eq(1)').attr('name', 'billing[taxvat-old]"]');

                        /*LIMPA CAMPOS*/
                        $j('input[name="taxvat"]').val('');
                        $j('input[name="billing[taxvat]"]').val('');

                        /*ADD CLASS TAXVAT*/
                        $j('input[name*="taxvat"]').attr('class', 'validar_cpfcnpj input-text');
                    }else{
                        /*CADASTRO*/
                        $j('.inputcnpj').attr('name', 'NULL');
                        $j('.inputcpf').attr('name', 'cpfcnpj');

                        /*BILLING*/
                        $j('.Binputcnpj').attr('name', "NULL");             /*CNPJ NULL*/
                        $j('.Binputcpf').attr('name', "billing[cpfcnpj]");  /*CPF OK*/
                        //$j('.Binputcpf').attr('name', 'oioioi');
                        /*LIMPA CAMPOS*/
                        $j('input[name="cpfcnpj"]').val('');
                        $j('input[name="billing[cpfcnpj]"]').val('');
                    }

                    /*Exibe ou oculta os boxs*/
                    $j('.boxpj').hide();
                    $j('.boxpf').show();

                    /*Exibe ou oculta o entregar em outro endere�o conforme a selecao do tipo pessoa*/
                    $j('li.options').find("label:contains('Entregar')").css('visibility', 'visible');
                    $j('input[name*="[same_as_billing]"]').css('visibility', 'visible');

                }else if(queme == 'Juridica'){
                  /*juricica*/

                    /*Se existe o Taxvat alterna entre eles mudando o name conforme selecionado o tipo pessoa*/
                    if( existe != ''){
                        /*CADASTRO*/
                        $j('input[name="taxvat-old"]').attr('name', 'taxvat');
                        $j('input[name="taxvat"]:eq(0)').attr('name', 'taxvat-old');

                        $j('input[name="taxvat-old"]').attr('class', 'input-text');
                        $j('input[name="taxvat"]').attr('class', 'validar_cpfcnpj input-text');

                        /*BILLING*/
                        $j('input[name="billing[taxvat-old]"]').attr('name', 'billing[taxvat]');
                        $j('input[name="billing[taxvat]"]:eq(0)').attr('name', 'billing[taxvat-old]');

                        /*LIMPA CAMPOS*/
                        $j('input[name="taxvat"]').val('');
                        $j('input[name="billing[taxvat]"]').val('');

                        /*ADD CLASS TAXVAT*/
                        $j('input[name*="taxvat"]').attr('class', 'validar_cpfcnpj input-text');
                    }else{
                        /*CADASTRO*/
                        $j('.inputcnpj').attr('name', 'cpfcnpj');
                        $j('.inputcpf').attr('name', 'NULL');

                        /*BILLING*/
                        $j('.Binputcnpj').attr('name', 'billing[cpfcnpj]'); /*CNPJ OK*/
                        $j('.Binputcpf').attr('name', 'NULL');              /*CPF NULL*/

                        /*LIMPA CAMPOS*/
                        $j('input[name="cpfcnpj"]').val('');
                        $j('input[name="billing[cpfcnpj]"]').val('');
                    }

                    /*Exibe ou oculta os boxs*/
                    $j('.boxpj').show();
                    $j('.boxpf').hide();

                    /*Exibe ou oculta o entregar em outro endere�o conforme a selecao do tipo pessoa*/
                    $j('li.options').find("label:contains('Entregar')").css('visibility', 'hidden');
                    $j('input[name*="[same_as_billing]"]').css('visibility', 'hidden');
                }
            });
/*===================================================== End Click ===========================================================*/



            /*Faz o checkout do IE para isento*/
            $j('input[name*="isento"]').click( function(){

                if ($j(this).attr('checked')) {
                    $j('input[name*="ie"]').val("isento");
                    $j('input[name*="ie"]').css('background', '#DDDDDD');
                    //$j('input[name*="ie"]').attr('disabled', true);
                    $j('input[name*="ie"]').attr('readonly', 'readonly');
                } else {
                    $j('input[name*="ie"]').val('');
                    $j('input[name*="ie"]').css('background', '#FFFFFF');
                    //$j('input[name*="ie"]').removeAttr('disabled');
                    $j('input[name*="ie"]').removeAttr('readonly');
                }
            });



            /*Botao aguarde*/
            var erro1;
            var erro2;

            $j('#review-buttons-container').click( function(){
                $j(this).attr('class', 'buttons-set disabled');
                $j('#review-please-wait').show();

                erro1 = $j('.error-msg').length;
                erro2 = $j('.validation-failed').length;

                //alert(erro1); alert(erro2);

                if(erro1 > 0 || erro2 > 0){
                    $j(this).attr('class', 'buttons-set');
                    $j('#review-please-wait').hide();
                }
            });


            //Ao se coloca o "-" no CEP n�o ir� calcular o frete caso use o m�dulo Matrix Rates, pois ele n�o trabalha com o "-"
            /*Essa op��o � caso queira que toda vez ao se entrar no campo ele limpe-o*/
            $j('input[class*="tracoAtivo"]').focus(function(){
              $j(this).val('');
            });

             /*Script do tra�o do cep*/
             /*   mexer
            $j('input[class*="tracoAtivo"]').keydown( function(e){
                  $j(this).attr('maxlength','9');
                  if (e.keyCode >= 9){
                    //length = this.value.length;
                    length = $j(this).length;
                    if (length == 5)
                        //this.value += "-";
                        $j(this).value += "-";
                  }
            });
            */


            //$j('input[class*="tracoAtivo"]').mask("99999-999");     apresenta erro e nao calcula o frete



            $j('input[name*="telephone"]').focus(function(){
              $j(this).val('');
            });

            $j('input[name*="telephone"]').keypress( function(e){
                if (e.keyCode >= 9){
                    length = this.value.length;
                    if (length == 0)
                      this.value += "(";

                    if (length == 3)
                      this.value += ")";
                    /*
                    Testa para ver se o ddd come�a com 11 e coloca maxlength para 14
                            exemplo: (11)95345-1234 que antes era assim (11)5345-1234
                    */
                    if(/(\(11\)9(5[0-9]|6[0-9]|7[01234569]|8[0-9]|9[0-9])).+/i.test(this.value)){
                        $j(this).attr('maxlength','14');
                        if (length == 9)
                          this.value += "-";
                    } else {
                        $j(this).attr('maxlength','13');
                        if (length == 8)
                          this.value += "-";
                    }
                }
            });


            $j('input[name*="fax"]').focus(function(){
              $j(this).val('');
            });

            $j('input[name*="fax"]').keypress( function(e){
                if (e.keyCode >= 9){
                    length = this.value.length;
                    if (length == 0)
                      this.value += "(";

                    if (length == 3)
                      this.value += ")";
                    /*
                    Testa para ver se o ddd come�a com 11 e coloca maxlength para 14
                            exemplo: (11)95345-1234 que antes era assim (11)5345-1234
                    */
                    if(/(\(11\)9(5[0-9]|6[0-9]|7[01234569]|8[0-9]|9[0-9])).+/i.test(this.value)){
                        $j(this).attr('maxlength','14');
                        if (length == 9)
                          this.value += "-";
                    } else {
                        $j(this).attr('maxlength','13');
                        if (length == 8)
                          this.value += "-";
                    }
                }
            });

            $j('input[name*="celular"]').focus(function(){
              $j(this).val('');
            });

            $j('input[name*="celular"]').keypress( function(e){
                if (e.keyCode >= 9){
                    length = this.value.length;
                    if (length == 0)
                      this.value += "(";

                    if (length == 3)
                      this.value += ")";
                    /*
                    Testa para ver se o ddd come�a com 11 e coloca maxlength para 14
                            exemplo: (11)95345-1234 que antes era assim (11)5345-1234
                    */
                    if(/(\(11\)9(5[0-9]|6[0-9]|7[01234569]|8[0-9]|9[0-9])).+/i.test(this.value)){
                        $j(this).attr('maxlength','14');
                        if (length == 9)
                          this.value += "-";
                    } else {
                        $j(this).attr('maxlength','13');
                        if (length == 8)
                          this.value += "-";
                    }
                }
            });

            $j('input[name*="taxvat"]').blur( function(){

                v = $j(this).val();

                //para testar cnpj: 78.425.986/0036-15 ou 78425986003615

                //Remove tudo o que n�o � d�gito
                v = v.replace(/\D/g,"");

                if (v.length <= 11) { //CPF

                    //Coloca um ponto entre o terceiro e o quarto d�gitos
                    v=v.replace(/(\d{3})(\d)/,"$1.$2");

                    //Coloca um ponto entre o terceiro e o quarto d�gitos
                    //de novo (para o segundo bloco de n�meros)
                    v=v.replace(/(\d{3})(\d)/,"$1.$2");

                    //Coloca um h�fen entre o terceiro e o quarto d�gitos
                    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

                } else { //CNPJ

                    //Coloca ponto entre o segundo e o terceiro d�gitos
                    v=v.replace(/^(\d{2})(\d)/,"$1.$2");

                    //Coloca ponto entre o quinto e o sexto d�gitos
                    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");

                    //Coloca uma barra entre o oitavo e o nono d�gitos
                    v=v.replace(/\.(\d{3})(\d)/,".$1/$2");

                    //Coloca um h�fen depois do bloco de quatro d�gitos
                    v=v.replace(/(\d{4})(\d)/,"$1-$2");
                }

                $j(this).val(v);

            });


            $j('input[name*="cpfcnpj"]').blur( function(){

                v = $j(this).val();

                //para testar cnpj: 78.425.986/0036-15 ou 78425986003615

                //Remove tudo o que n�o � d�gito
                v = v.replace(/\D/g,"");

                if (v.length <= 11) { //CPF

                    //Coloca um ponto entre o terceiro e o quarto d�gitos
                    v=v.replace(/(\d{3})(\d)/,"$1.$2");

                    //Coloca um ponto entre o terceiro e o quarto d�gitos
                    //de novo (para o segundo bloco de n�meros)
                    v=v.replace(/(\d{3})(\d)/,"$1.$2");

                    //Coloca um h�fen entre o terceiro e o quarto d�gitos
                    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

                } else { //CNPJ

                    //Coloca ponto entre o segundo e o terceiro d�gitos
                    v=v.replace(/^(\d{2})(\d)/,"$1.$2");

                    //Coloca ponto entre o quinto e o sexto d�gitos
                    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");

                    //Coloca uma barra entre o oitavo e o nono d�gitos
                    v=v.replace(/\.(\d{3})(\d)/,".$1/$2");

                    //Coloca um h�fen depois do bloco de quatro d�gitos
                    v=v.replace(/(\d{4})(\d)/,"$1-$2");
                }

                $j(this).val(v);

            });




            $j('input').click( function(){
                    $j('html head').find('title').text(  "OSC: Finalizando compra no campo [ " + $j(this).attr('title') + " ]"  );
                    _gaq.push(['_trackPageview', '#' + $j(this).attr('name') + '']);
            });

            $j(':input').blur( function(){
                    pageTracker._trackEvent("OSC no campo: ", "input_exit", $j(this).attr('name'));
            });



        });




        /********************* Busca de CEP na base dos correios por Ajax *********************/
        /********************* Busca de CEP na base dos correios por Ajax *********************/
        /********************* Busca de CEP na base dos correios por Ajax *********************/


        function buscarEndereco(host, quale) {


    			$j.ajax({
    				url: host + 'frontend/base/default/deivison/buscacep.php?cep=' + document.getElementById(quale+':postcode').value.replace(/\+/g, ''),
    				type:'GET',
    				dataType: 'html',
    				success:function(respostaCEP){
    					//alert(respostaCEP); //para testes

                        var r = respostaCEP;

                        street_1 = r.substring(0, (i = r.indexOf(':')));
                        document.getElementById(quale+':street1').value = unescape(street_1.replace(/\+/g," "));

                        r = r.substring(++i);
                        street_4 = r.substring(0, (i = r.indexOf(':')));
                        document.getElementById(quale+':street4').value = unescape(street_4.replace(/\+/g," "));

                        r = r.substring(++i);
                        city = r.substring(0, (i = r.indexOf(':')));
                        document.getElementById(quale+':city').value = unescape(city.replace(/\+/g," "));

                        r = r.substring(++i);
                        region = r.substring(0, (i = r.indexOf(':')));

                        //document.getElementById(quale+':region').selectedIndex = unescape(region.replace(/\+/g," "));
                        //document.getElementById(quale+':region_id').selectedIndex = unescape(region.replace(/\+/g," "));

                        region = region.replace(/\+/g," ");

                        //alert(region);
                        $j('select[id*="'+quale+':region"]').children("option:contains('"+region+"')").attr('selected', 'selected');
                        $j('select[id*="'+quale+':region_id"]').children("option:contains('"+region+"')").attr('selected', 'selected');

                        //document.getElementById(quale+':region_id').children("option:contains('"+region+"')").attr('selected', 'selected');



                        setTimeout(function() { document.getElementById(quale+':street2').focus(); }, 1);
    				}
    			});

        };




        /********************* Valida CPF e CNPJ *********************/
        /********************* Valida CPF e CNPJ *********************/
        /********************* Valida CPF e CNPJ *********************/

    	// Adicionar classe de validacao de cpf e cnpj ao Taxvat
    	//$j('#billing:taxvat"]').addClassName('validar_cpf'); //removido e colocado na m�o

        function validaCPF(cpf,pType){
        	var cpf_filtrado = "", valor_1 = " ", valor_2 = " ", ch = "";
        	var valido = false;

        	for (i = 0; i < cpf.length; i++){
              ch = cpf.substring(i, i + 1);
            	if (ch >= "0" && ch <= "9"){
                	cpf_filtrado = cpf_filtrado.toString() + ch.toString()
                	valor_1 = valor_2;
                	valor_2 = ch;
        	    }
        	    if ((valor_1 != " ") && (!valido)) valido = !(valor_1 == valor_2);
        	}

        	if (!valido) cpf_filtrado = "12345678912";
        	if (cpf_filtrado.length < 11){
        	    for (i = 1; i <= (11 - cpf_filtrado.length); i++){cpf_filtrado = "0" + cpf_filtrado;}
        	}

        	if(pType <= 1){
        	    if ( ( cpf_filtrado.substring(9,11) == checkCPF( cpf_filtrado.substring(0,9) ) ) && ( cpf_filtrado.substring(11,12)=="") ){return true;}
        	}

        	if((pType == 2) || (pType == 0)){
            	if (cpf_filtrado.length >= 14){
            	    if ( cpf_filtrado.substring(12,14) == checkCNPJ( cpf_filtrado.substring(0,12) ) ){  return true;}
            	}
        	}

    	return false;
    	}



      	function checkCNPJ(vCNPJ){
      	var mControle = "";
      	var aTabCNPJ = new Array(5,4,3,2,9,8,7,6,5,4,3,2);
      	for (i = 1 ; i <= 2 ; i++){
        	mSoma = 0;
        	for (j = 0 ; j < vCNPJ.length ; j++)
        	mSoma = mSoma + (vCNPJ.substring(j,j+1) * aTabCNPJ[j]);
        	if (i == 2 ) mSoma = mSoma + ( 2 * mDigito );
        	mDigito = ( mSoma * 10 ) % 11;
        	if (mDigito == 10 ) mDigito = 0;
        	mControle1 = mControle ;
        	mControle = mDigito;
        	aTabCNPJ = new Array(6,5,4,3,2,9,8,7,6,5,4,3);
      	}

      	return( (mControle1 * 10) + mControle );
      	}



      	function checkCPF(vCPF){
      	var mControle = ""
      	var mContIni = 2, mContFim = 10, mDigito = 0;
      	for (j = 1 ; j <= 2 ; j++){
        	mSoma = 0;
        	for (i = mContIni ; i <= mContFim ; i++)
        	mSoma = mSoma + (vCPF.substring((i-j-1),(i-j)) * (mContFim + 1 + j - i));
        	if (j == 2 ) mSoma = mSoma + ( 2 * mDigito );
        	mDigito = ( mSoma * 10 ) % 11;
        	if (mDigito == 10) mDigito = 0;
        	mControle1 = mControle;
        	mControle = mDigito;
        	mContIni = 3;
        	mContFim = 11;
      	}

      	return( (mControle1 * 10) + mControle );
      	}




/*  deivison 02
    FUN��O QUE EXECUTA PASSO A PASSO DE ATUALIZA��O DOS CAMPOS PAYMENTS E REVIEW
    -------------------------------------------------------------------------------------------------------------------------------
    Essa fun��o foi feita para atualiza��o dos valores, caso haja desconto para pagamentos espec�ficos como 10% pagamento no boleto
    -------------------------------------------------------------------------------------------------------------------------------
    M�todos de atualia��o
    'payment-method': 1,    <- Atualiza os meios de pagamentos
    'shipping-method': 1,   <- Atualiza os m�todos de envio
    'review': 1             <- Atualiza o resumo da compra
*/

//Para atualizar caso tenha desconto no boleto
$j(function($) {
      $j('input[name*="payment[method]"]').live('click', function() {
              checkout.update({
                    // 'review': 1
                    //,'shipping-method': 1
                    'payment-method': 1
              });

             setTimeout(function(){
                        checkout.update({
                            'review': 1
                            //,'payment-method': 1
                        });
             }, 1000);

              $j('html head').find('title').text(  "OSC: Finalizando compra no campo [ " + $j(this).attr('name') + " ]"  );
              _gaq.push(['_trackPageview', '#' + $j(this).attr('name') + '']);
              pageTracker._trackEvent("OSC no campo: ", "input_exit", $j(this).attr('name'));
      });


      $j('input[name*="shipping_method"]').live('click', function() {
              checkout.update({
                    'review': 1
                    ,'payment-method': 1
                    //'shipping-method': 1
              });
             setTimeout(function(){
                        checkout.update({
                            'review': 1,
                            //'payment-method': 1
                        });
             }, 500);

              $j('html head').find('title').text(  "OSC: Finalizando compra no campo [ " + $j(this).attr('value') + " ]"  );
              _gaq.push(['_trackPageview', '#' + $j(this).attr('value') + '']);
              pageTracker._trackEvent("OSC no campo: ", "input_exit", $j(this).attr('value'));
      });


      $j('#checkout-payment-method-load input').live('click', function() {
              $j('html head').find('title').text(  "OSC: Finalizando compra no campo [ " + $j(this).attr('name') + " ]"  );
              _gaq.push(['_trackPageview', '#' + $j(this).attr('name') + '']);
              pageTracker._trackEvent("OSC no campo: ", "input_exit", $j(this).attr('name'));

      });


});




