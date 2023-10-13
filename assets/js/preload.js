// document.addEventListener("DOMContentLoaded", function() {
//     // Simule um atraso de 2 segundos (2000 milissegundos)
//     setTimeout(function() {
//         // Remova a tela de preload e exiba o conteúdo principal
//         document.querySelector(".preload").style.display = "none";
//         document.querySelector(".content").style.display = "block";
//     }, 650);
// });

 
        // Função para definir um cookie
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        // Função para obter o valor de um cookie
        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        // Verifique se o preload já foi exibido
        var preloadShown = getCookie("preload_shown");
        if (preloadShown === "") {
            // Simule um atraso de 2 segundos (2000 milissegundos)
            setTimeout(function () {
                // Remova a tela de preload e exiba o conteúdo principal
                document.querySelector(".preload").style.display = "none";
                document.querySelector(".content").style.display = "block";
                // Defina um cookie para registrar que o preload foi exibido
                setCookie("preload_shown", "true", 365); // Valores podem ser ajustados
            }, 650);
        } else {
            // Se o preload já foi exibido, apenas exiba o conteúdo principal
            document.querySelector(".preload").style.display = "none";
            document.querySelector(".content").style.display = "block";
        }