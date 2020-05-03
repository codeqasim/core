    <!-- Content -->
    <section class="hero" style="background-image: url('assets/img/hero.jpg')">
        <div class="container">
            <div class="c5 bgw searchbox">
                <div class="row">
                    <div class="mdc-tab-bar" role="tablist">
                        <div class="mdc-tab-scroller">
                            <div class="mdc-tab-scroller__scroll-area">
                                <div class="mdc-tab-scroller__scroll-content">
                                    <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
                                    <span class="mdc-tab__content">
                                    <span class="mdc-tab__text-label">Hotels</span>
                                    </span>
                                    <span class="mdc-tab-indicator mdc-tab-indicator--active">
                                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                    </span>
                                    <span class="mdc-tab__ripple"></span>
                                    </button>
                                    <button class="mdc-tab mdc-tab" role="tab" aria-selected="true" tabindex="0">
                                    <span class="mdc-tab__content">
                                    <span class="mdc-tab__text-label">Flights</span>
                                    </span>
                                    <span class="mdc-tab-indicator mdc-tab-indicator">
                                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                    </span>
                                    <span class="mdc-tab__ripple"></span>
                                    </button>
                                    <button class="mdc-tab mdc-tab" role="tab" aria-selected="true" tabindex="0">
                                    <span class="mdc-tab__content">
                                    <span class="mdc-tab__text-label">Tours</span>
                                    </span>
                                    <span class="mdc-tab-indicator mdc-tab-indicator">
                                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                    </span>
                                    <span class="mdc-tab__ripple"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="search_contents">
                        <div class="content content--active row">
                            <div class="c12">
                              <form method="get" action="<?=$root;?>hotels/">
                                <div class="row">
                                    <label class="mdc-text-field  mdc-text-field--with-leading-icon">
                                        <i class="material-icons mdc-text-field__icon">pin_drop</i>
                                        <div class="mdc-text-field__ripple"></div>
                                        <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id" id="city" name="city">
                                        <span class="mdc-floating-label" id="my-label-id">City Name.</span>
                                        <div class="mdc-line-ripple"></div>
                                    </label>
                                    <!--<label class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon">
                                        <i class="material-icons mdc-text-field__icon">favorite</i>
                                        <input class="mdc-text-field__input" id="text-field-hero-input">
                                        <div class="mdc-notched-outline">
                                                <div class="mdc-notched-outline__leading"></div>
                                                <div class="mdc-notched-outline__notch">
                                                        <label for="text-field-hero-input" class="mdc-floating-label">Destination</label>
                                                </div>
                                                <div class="mdc-notched-outline__trailing"></div>
                                        </div>
                                        </label>-->
                                </div>
                                <div class="row group">
                                    <div class="c6">
                                        <div class="row">
                                            <label class="mdc-text-field  mdc-text-field--with-leading-icon">
                                                <i class="material-icons mdc-text-field__icon">calendar_today</i>
                                                <div class="mdc-text-field__ripple"></div>
                                                <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id" id="checkin" name="checkin">
                                                <span class="mdc-floating-label" id="check">Checkin</span>
                                                <div class="mdc-line-ripple"></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="c6">
                                        <div class="row">
                                            <label class="mdc-text-field  mdc-text-field--with-leading-icon">
                                                <i class="material-icons mdc-text-field__icon">calendar_today</i>
                                                <div class="mdc-text-field__ripple"></div>
                                                <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id" id="checkout" name="checkout">
                                                <span class="mdc-floating-label" id="my-label-id">Checkout</span>
                                                <div class="mdc-line-ripple"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row group">
                                    <div class="mdc-select">
                                        <div class="mdc-select__anchor">
                                            <i class="mdc-select__dropdown-icon"></i>
                                            <div id="demo-selected-text" class="mdc-select__selected-text" role="button" aria-haspopup="listbox" aria-labelledby="demo-label demo-selected-text">Vegetables</div>
                                            <span id="demo-label" class="mdc-floating-label mdc-floating-label--float-above">Travelers</span>
                                            <div class="mdc-line-ripple"></div>
                                        </div>
                                        <div class="mdc-select__menu mdc-menu mdc-menu-surface" role="listbox">
                                            <ul class="mdc-list">
                                                <li class="mdc-list-item mdc-list-item--selected" data-value="grains" role="option">
                                                    2 Adults
                                                </li>
                                                <li class="mdc-list-item mdc-list-item--disabled" data-value="vegetables" aria-selected="true" aria-disabled="true" role="option">
                                                    3 Adults
                                                </li>
                                                <li class="mdc-list-item" data-value="fruit" role="option">
                                                    4 Adults
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!--<button onclick="selectFruits()">Select Fruits</button>-->
                                </div>
                                <div class="group">
                                    <div class="row">

                                        <input type="button" name="submit" onclick="checkredirect()" class="mdc-button mdc-button--raised db" value="Search"> 
                                    </div>
                                </div>
                             </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <p>Content two</p>
                </div>
                <div class="content">
                    <p>Content three</p>
                </div>
            </div>
        </div>
    </section>

    <script type="text/javascript">
    function checkredirect(){
    var city = $('#city').val();
    var checkin =  $('#checkin').val();
    var checkout =  $('#checkout').val();
    window.location = '<?=$root;?>hotels/'+city+'/'+checkin+'/'+checkout;
    return false;
    }
    </script>


    <section class="bgg">
        <div class="container">
            <div class="row">
                <?php for ($i = 1; $i <= 3; $i++) { ?>
                <div class="c4">
                    <div class="mdc-card demo-card demo-basic-with-header">
                        <div class="demo-card__primary">
                            <h2 class="demo-card__title mdc-typography mdc-typography--headline6"><strong>Hotel Grand Plaza</strong></h2>
                            <h3 class="demo-card__subtitle mdc-typography mdc-typography--subtitle2">Dubai, <strong> United Arab Emarates</strong></h3>
                        </div>
                        <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
                            <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" style="background-image: url(&quot;https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg&quot;);"></div>
                            <div class="demo-card__secondary mdc-typography mdc-typography--body2">Visit ten places on our planet that are undergoing the biggest changes today.</div>
                        </div>
                        <div class="mdc-card__actions">
                            <div class="mdc-card__action-buttons">
                                <button class="mdc-button mdc-card__action mdc-card__action--button">  <span class="mdc-button__ripple"></span> <strong>$250</strong></button>
                                <button class="mdc-button mdc-card__action mdc-card__action--button">  <span class="mdc-button__ripple"></span> View</button>
                            </div>
                            <div class="mdc-card__action-icons">
                                <button class="mdc-icon-button mdc-card__action mdc-card__action--icon--unbounded" aria-pressed="false" aria-label="Add to favorites" title="Add to favorites">
                                <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">favorite</i>
                                <i class="material-icons mdc-icon-button__icon">favorite_border</i>
                                </button>
                                <!--<button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="Share" data-mdc-ripple-is-unbounded="true">share</button>-->
                                <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="More options" data-mdc-ripple-is-unbounded="true">more_vert</button>
                            </div>
                        </div>
                    </div>
                </div>
                <?php } ?>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="">
                <ul class="mdc-image-list standard-image-list mdc-image-list--with-text-protection">
                    <li class="mdc-image-list__item">
                        <div class="mdc-image-list__image-aspect-container"><img class="mdc-image-list__image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/1.jpg" alt="Text label"></div>
                        <div class="mdc-image-list__supporting"><span class="mdc-image-list__label">Text label</span></div>
                    </li>
                    <li class="mdc-image-list__item">
                        <div class="mdc-image-list__image-aspect-container"><img class="mdc-image-list__image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" alt="Text label"></div>
                        <div class="mdc-image-list__supporting"><span class="mdc-image-list__label">Text label</span></div>
                    </li>
                    <li class="mdc-image-list__item">
                        <div class="mdc-image-list__image-aspect-container"><img class="mdc-image-list__image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/3.jpg" alt="Text label"></div>
                        <div class="mdc-image-list__supporting"><span class="mdc-image-list__label">Text label</span></div>
                    </li>
                    <li class="mdc-image-list__item">
                        <div class="mdc-image-list__image-aspect-container"><img class="mdc-image-list__image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/4.jpg" alt="Text label"></div>
                        <div class="mdc-image-list__supporting"><span class="mdc-image-list__label">Text label</span></div>
                    </li>
                    <li class="mdc-image-list__item">
                        <div class="mdc-image-list__image-aspect-container"><img class="mdc-image-list__image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/5.jpg" alt="Text label"></div>
                        <div class="mdc-image-list__supporting"><span class="mdc-image-list__label">Text label</span></div>
                    </li>
                    <li class="mdc-image-list__item">
                        <div class="mdc-image-list__image-aspect-container"><img class="mdc-image-list__image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/6.jpg" alt="Text label"></div>
                        <div class="mdc-image-list__supporting"><span class="mdc-image-list__label">Text label</span></div>
                    </li>
                    <li class="mdc-image-list__item">
                        <div class="mdc-image-list__image-aspect-container"><img class="mdc-image-list__image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/7.jpg" alt="Text label"></div>
                        <div class="mdc-image-list__supporting"><span class="mdc-image-list__label">Text label</span></div>
                    </li>
                    <li class="mdc-image-list__item">
                        <div class="mdc-image-list__image-aspect-container"><img class="mdc-image-list__image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/8.jpg" alt="Text label"></div>
                        <div class="mdc-image-list__supporting"><span class="mdc-image-list__label">Text label</span></div>
                    </li>
                    <li class="mdc-image-list__item">
                        <div class="mdc-image-list__image-aspect-container"><img class="mdc-image-list__image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/9.jpg" alt="Text label"></div>
                        <div class="mdc-image-list__supporting"><span class="mdc-image-list__label">Text label</span></div>
                    </li>
                    <li class="mdc-image-list__item">
                        <div class="mdc-image-list__image-aspect-container"><img class="mdc-image-list__image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/10.jpg" alt="Text label"></div>
                        <div class="mdc-image-list__supporting"><span class="mdc-image-list__label">Text label</span></div>
                    </li>
                    <li class="mdc-image-list__item">
                        <div class="mdc-image-list__image-aspect-container"><img class="mdc-image-list__image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/11.jpg" alt="Text label"></div>
                        <div class="mdc-image-list__supporting"><span class="mdc-image-list__label">Text label</span></div>
                    </li>
                    <li class="mdc-image-list__item">
                        <div class="mdc-image-list__image-aspect-container"><img class="mdc-image-list__image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/12.jpg" alt="Text label"></div>
                        <div class="mdc-image-list__supporting"><span class="mdc-image-list__label">Text label</span></div>
                    </li>
                    <li class="mdc-image-list__item">
                        <div class="mdc-image-list__image-aspect-container"><img class="mdc-image-list__image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/13.jpg" alt="Text label"></div>
                        <div class="mdc-image-list__supporting"><span class="mdc-image-list__label">Text label</span></div>
                    </li>
                    <li class="mdc-image-list__item">
                        <div class="mdc-image-list__image-aspect-container"><img class="mdc-image-list__image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/14.jpg" alt="Text label"></div>
                        <div class="mdc-image-list__supporting"><span class="mdc-image-list__label">Text label</span></div>
                    </li>
                    <li class="mdc-image-list__item">
                        <div class="mdc-image-list__image-aspect-container"><img class="mdc-image-list__image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/15.jpg" alt="Text label"></div>
                        <div class="mdc-image-list__supporting"><span class="mdc-image-list__label">Text label</span></div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <div class="top-airlines">
        <div class="section-subtitle">
            <h2>Top Flight Destinations</h2>
            <h3>Get the best flight deal for top airlines with more than 500 airlines</h3>
        </div>
        <div class="container">
            <div class="row">
                <?php for ($i = 1; $i <= 3; $i++) { ?>
                <div class="c4">
                    <div class="airline-card">
                        <a href="#saudi">
                            <label for="airline-<?=$i ?>">
                                <div class="card-header">
                                    <div class="flex items-center row-rtl">
                                        <div class="airline_img rtl-align-right">
                                            <img  alt="airline_img" class="img-fluid" src="assets/img/flight.png">
                                        </div>
                                        <div class="airline-name">
                                            <span class="active">Saudi Arabian Airlines</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <input id="airline-<?=$i ?>" type="checkbox" hidden>
                            <div class="tab-panel">
                                <div class="airline-card-body">
                                    <div  class="itenary flex flex-content-between items-center">
                                        <span class="origin">Riyadh</span>
                                        <img  alt="" src="assets/img/rout_en.png">
                                        <span class="destination">Jeddah</span>
                                    </div>
                                    <div  class="itenary flex flex-content-between items-center">
                                        <span class="origin">Riyadh</span>
                                        <img  alt="" src="assets/img/rout_en.png">
                                        <span class="destination">Jeddah</span>
                                    </div>
                                    <div  class="itenary flex flex-content-between items-center">
                                        <span class="origin">Riyadh</span>
                                        <img  alt="" src="assets/img/rout_en.png">
                                        <span class="destination">Jeddah</span>
                                    </div>
                                    <div  class="itenary flex flex-content-between items-center">
                                        <span class="origin">Riyadh</span>
                                        <img  alt="" src="assets/img/rout_en.png">
                                        <span class="destination">Jeddah</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <?php } ?>
            </div>
        </div>
    </div>