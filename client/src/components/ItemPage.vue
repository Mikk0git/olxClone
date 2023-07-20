<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ItemPage',
  components: {
    
  },
  // Add any necessary properties, methods, or lifecycle hooks here
});
</script>


<template>
  <div id="itemPageContainer">
    <div id="itemPageLeft">
      <div id="itemImgContainer" class="itemPageElement"></div>

      <div id="itemInfo" class="itemPageElement">

        <div id="itemInfoWrapperTop">
        <p id="itemInfoDate">Dodane Dzisiaj o 22:06</p>
        <button id="itemInfoButtonFollow" class="itemInfoButton">OBSERWUJ</button></div>

        <h1 id="itemInfoName">Amator DSS 101 Unitra Diora amplituner</h1>
        <h1 id="itemInfoPrice">190zł</h1>
        <button id="itemInfoButtonPromote" class="itemInfoButton">PROMUJ</button>
        <button id="itemInfoButtonRefresh" class="itemInfoButton">ODŚWIEŻ</button>
        <div id="itemInfoTags"></div>
        <h2>OPIS</h2>
        <p id="itemInfoDescription">Witam <br>
        <br>
        Sprzedam radio Amator DSS 101 czyli pierwsza najładniejsza wersja. <br>
        <br>
        Amplituner był serwisowany i jest przestrojony. Niepewne gniazda głośnikowe DIN zostały zastąpione zaciskami. Potencjometry nie trzeszczą, a przełączniki nie strzelają. <br>
        <br>
        Wersja niebiesko czerwona, która nigdy nie była produkowana. <br>
        <br>
        Amplituner Amator wprowadził stereo pod polskie strzechy. Jego projekt był konsultowany z użytkownikami na łamach Trybuny Ludu. <br>
        <br>
        Dzięki temu powstał ciekawy wizualnie odbiornik pozwalający podłączyć zarówno magnetofon jak i gramofon. Interesująca jest gałka strojenia przypominająca rozwiązanie znane z produktów Marantza. <br>
      </p>
      <div id="itemInfoWrapperBottom">
        <p id="itemInfoId">ID: 849437770</p>
        <button id="itemInfoButtonReport" class="itemInfoButton">Zgłoś</button>

      </div>
      </div>
      <div id="itemLogIn" class="itemPageElement">
        Zaloguj się lub załóż konto na OLX, aby skontaktować się z tym sprzedającym
        <button id="itemLogInButton">Zaloguj się / Załóż konto</button>
      </div>


      <div id="itemContact" class="itemPageElement">
        <h5>SKONTAKTUJ SIĘ</h5>
        <div id="itemContactWrapper">
          <div id="itemSellerData">

            <!-- Zamienić to na komponent -->
            <img src="" alt="">
          <h3>Timi</h3>
          Na OLX od styczeń 2023<br>
          Ostatnio online w dniu 15 lipca 2023
          </div>
          <button id="itemContactButton">Wyślij wiadomość</button>
        </div>
      </div>
    </div>

    <div id="itemPageRight">

      <div id="itemSellerInfo" class="itemPageElement">
        <div id="itemSellerInfoSellerType">
          Osoba prywatna
        </div>
        <div id="itemSellerData">
            <!-- Zamienić to na komponent -->
            <img src="" alt="">
            <h3>Timi</h3>
            Na OLX od styczeń 2023<br>
            Ostatnio online w dniu 15 lipca 2023
        </div>
        <div id="itemSellerInfoWrapper">

        <div id="itemSellerInfoSellerScore">
          <div id="itemSellerInfoSellerScoreWrapper">
            <img src="" alt="">
            <p><b>Dobrze: </b> Większość kupujących jest zadowolona z tego ogłoszeniodawcy</p>
        </div>
          Jak działają oceny?
        </div>
        <button id="itemContactButton">Wyślij wiadomość</button>
        <p id="itemSellerInfoMoreFromSeller">Więcej od tego ogłoszeniodawcy</p>
      </div>
      </div>
      <div id="itemLocation" class="itemPageElement">
        <h5>LOKALIZACJA</h5>
        <div id="itemLocationWrapper">
          <div id="itemLocationPlace">Wschowa,<br>
            Lubuskie</div>
          <img src="" alt="">
        </div>
      </div>
      <div id="itemLaws" class="itemPageElement">
        <div id="itemLawsWrapper">
        <h5>PRAWA KONSUMENTA</h5>
        <p><b>To ogłoszenie dodała osoba prywatna.</b></p>
        <p>W związku z tym zakupy, które u niej robisz, nie są objęte przepisami konsumenckimi. Mimo to pamiętaj, że zamówienia z Przesyłką OLX są objęte Pakietem Ochronnym.</p>
        <p>W zakup przedmiotu lub zlecenie usługi na OLX zaangażowanych jest kilka podmiotów. Każdy z nich ma następujące obowiązki:</p>
        <ol>
          <li><p><b>OLX odpowiada za </b> udostępnienie Ci usług internetowych, takich jak konto OLX, zamieszczanie ogłoszeń i promowania, możliwość zakupu przedmiotów z opcją Przesyłki OLX oraz inne usługi opisane w naszym Regulaminie.</p></li>
          <li><p><b>Sprzedawcy będący osobami prywatnymi są odpowiedzialni za </b>sprzedaż i wysłanie Ci dokładnie tego przedmiotu lub zrealizowanie dokładnie tej usługi, jakie zostały opisane w ich ogłoszeniu. Jeśli masz jakiekolwiek pytania dotyczące zakupu, sugerujemy bezpośredni kontakt ze sprzedawcą będącym osobą prywatną.</p></li>
          <li><p><b>Nasz partner płatności jest odpowiedzialny za </b>zapewnienie Ci metody płatności online, a <b>nasi partnerzy zajmujący się dostawą </b> są odpowiedzialni za dostarczenie przedmiotów do Ciebie, jak opisano w ich Regulaminach.</p></li>
        </ol>
        <p>Jeśli otrzymasz inny przedmiot niż zamówiony z Przesyłką OLX, pamiętaj, aby w ciągu 24 godzin od odebrania paczki przesłać zgłoszenie w ramach Pakietu Ochronnego.</p>
        <p>Przejdź do naszego centrum pomocy, aby uzyskać szczegółowe informacje na temat praw konsumenta na OLX.</p>
        </div>
        <h6 id="itemLawsSeeLessButton">Zobacz mniej</h6>
      </div>
    </div>
    
  </div>
  
</template>
  

  