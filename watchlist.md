---
title: Watchlist
layout: page
---

*last updated: June 5, 2023* 

## Center-Forwards 

### U20

<style>
  .table {
    width: 100%;
    font-size: 14px;
  }

  .popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 1px solid rgb(169, 169, 169);
    padding: 40px;
    z-index: 9999;
    max-width: 100%;
    width: 90%;
    max-height: 80vh;
    overflow: auto;
  }

  .team {
    margin-bottom: 0px;
    font-size: 14px;
    margin-top: 0px;
  }

  .added {
    margin-top: 0px;
    font-size: 14px;
    margin-bottom: 0px;
  }
   
  .fbref {
    font-size: 14px;
    margin-top: 0px;
  } 
  
  .player-name {
    margin-bottom: 0px;
    margin-top: 0px; 
  }

  .popup-close {
    position: absolute;
    top: 39px;
    right: 40px;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .popup {
      width: 50%;
    }
    .table {
      font-size: 1.5em;
      width: 60%;
    }
  }
</style>
<script>
  window.addEventListener('DOMContentLoaded', function () {
  const popups = document.querySelectorAll('.popup');

  let scrollPosition = 0;
  const body = document.body;

  popups.forEach(function (popup) {
    const name = popup.id;
    const link = document.querySelector('a[name="' + name + '"]');
    const closeBtn = popup.querySelector('.popup-close');
    const video = popup.querySelector('iframe');

    link.addEventListener('click', function (e) {
      e.preventDefault();
      openPopup(popup);
    });

    closeBtn.addEventListener('click', function () {
      closePopup(popup);
    });

    popup.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });

  function openPopup(popup) {
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosition}px`;
    body.style.width = '100%';
    body.classList.add('noscroll');

    popup.style.display = 'block';

    const video = popup.querySelector('iframe');
    if (video && video.contentWindow && video.contentWindow.postMessage) {
      video.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    }
  }

  function closePopup(popup) {
    popup.style.display = 'none';

    body.classList.remove('noscroll');
    body.style.position = 'static';
    body.style.top = 'auto';
    body.style.width = 'auto';
    window.scrollTo(0, scrollPosition);

    const video = popup.querySelector('iframe');
    if (video && video.contentWindow && video.contentWindow.postMessage) {
      video.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    }
  }
});
  
</script>

<table>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Team</th>
    <th>Added</th>
  </tr>
  <tr>
    <td><strong>1</strong></td>
    <td><a href="#" name="Youssoufa Moukoko">Youssoufa Moukoko</a></td>
    <td>Dortmund</td>
    <td>4/23/23</td>
  </tr>
  <tr>
    <td><strong>2</strong></td>
    <td><a href="#" name="Evan Ferguson">Evan Ferguson</a></td>
    <td>Brighton</td>
    <td>4/23/23</td>
  </tr>
  <tr>
    <td><strong>3</strong></td>
    <td><a href="#" name="Benjamin Šeško">Benjamin Šeško</a></td>
    <td>Red Bull Salzburg</td>
    <td>4/23/23</td>
  </tr>
  <tr>
    <td><strong>4</strong></td>
    <td><a href="#" name="Divin Mubama">Divin Mubama</a></td>
    <td>West Ham</td>
    <td>4/23/23</td>
  </tr>
</table>

<div class="popup" id="Youssoufa Moukoko">
  <div clas="player-info">
    <h3 class="player-name">Youssoufa Moukoko</h3>
    <p class="team"><strong>Team:</strong> Dortmund</p>
    <p class="added"><strong>Added:</strong> 4/23/23</p>
    <p class="fbref"><a href="https://fbref.com/en/players/6ce43701/Youssoufa-Moukoko</a>FBref</a></p>
  </div>
  <div class="player-notes">
    <p>
      <iframe width="100%" height="200" src="https://www.youtube.com/embed/SmHJ3219P-0" frameborder="0" allowfullscreen=""></iframe>
    </p>
  </div>
 <span class="popup-close">X</span>  
</div>



### U23

| | Name | Team | | Added | 
| --- | --- | --- | --- | --- |
| **1** | [Loïs Openda](https://fbref.com/en/players/8652a85c/Lois-Openda) | RB Leipzig | <a href="https://youtu.be/TPNudMfYzkk"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| **2** | [Anastasios Douvikas](https://fbref.com/en/players/853ca71c/Anastasios-Douvikas) | FC Utrecht | <a href="https://youtu.be/qcuwT5usgu0"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| **3** | [Elye Wahi](https://fbref.com/en/players/0d7b6576/Elye-Wahi) | Montpellier | <a href="https://youtu.be/bLt6L0v7qg8"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| **4** | [Nicolas Jackson](https://fbref.com/en/players/9c36ed83/Nicolas-Jackson) | Villarreal | <a href="https://youtu.be/sQD6sNd1Kmw"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| **5** | [Gift Orban](https://fbref.com/en/players/de17db90/Gift-Orban) | Gent | <a href="https://youtu.be/Klsm-f7_kJ4"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| **6** | [Carlos Alcaraz](https://fbref.com/en/players/4abac767/Carlos-Alcaraz) | Southampton | <a href="https://youtu.be/utGMkJeR2QQ"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| **7** | [Ricardo Pepi](https://fbref.com/en/players/a2b1ed42/Ricardo-Pepi) | Groningen | <a href="https://youtu.be/d6RB9EFQIGM"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| **8** | [Jonathan David](https://fbref.com/en/players/ce50fd99/Jonathan-David) | Lille | <a href="https://youtu.be/Cn4h1L9cVQY"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| **9** | [Sydney van Hooijdonk](https://fbref.com/en/players/5b418e15/Sydney-van-Hooijdonk) | Heerenveen | <a href="https://youtu.be/Bvybn8pU0qk"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| **10** | [Abel Ruiz](https://fbref.com/en/players/6cbf8d0d/Abel-Ruiz) | Braga | <a href="https://youtu.be/taSxEl9zk_U"><i class="fa-solid fa-video"></i></a> | 4/23/23 |

### Senior 
| | Name | Team | | Added | 
| --- | --- | --- | --- | --- |
| 1 | [Youssoufa](https://fbref.com/en/players/6ce43701/Youssoufa-Moukoko) | Team | <a href="https://youtu.be/SmHJ3219P-0"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| **2** | [Terem Moffi](https://fbref.com/en/players/065dc209/Terem-Moffi) | Nice | <a href="https://youtu.be/tBO4-O5X6A4"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| 3 | [Youssoufa](https://fbref.com/en/players/6ce43701/Youssoufa-Moukoko) | Team | <a href="https://youtu.be/SmHJ3219P-0"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| 4 | [Youssoufa](https://fbref.com/en/players/6ce43701/Youssoufa-Moukoko) | Team | <a href="https://youtu.be/SmHJ3219P-0"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| 5 | [Youssoufa](https://fbref.com/en/players/6ce43701/Youssoufa-Moukoko) | Team | <a href="https://youtu.be/SmHJ3219P-0"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| 6 | [Youssoufa](https://fbref.com/en/players/6ce43701/Youssoufa-Moukoko) | Team | <a href="https://youtu.be/SmHJ3219P-0"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| 7 | [Youssoufa](https://fbref.com/en/players/6ce43701/Youssoufa-Moukoko) | Team | <a href="https://youtu.be/SmHJ3219P-0"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| 8 | [Youssoufa](https://fbref.com/en/players/6ce43701/Youssoufa-Moukoko) | Team | <a href="https://youtu.be/SmHJ3219P-0"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| 9 | [Youssoufa](https://fbref.com/en/players/6ce43701/Youssoufa-Moukoko) | Team | <a href="https://youtu.be/SmHJ3219P-0"><i class="fa-solid fa-video"></i></a> | 4/23/23 |
| 10 | [Youssoufa](https://fbref.com/en/players/6ce43701/Youssoufa-Moukoko) | Team | <a href="https://youtu.be/SmHJ3219P-0"><i class="fa-solid fa-video"></i></a> | 4/23/23 
      |
