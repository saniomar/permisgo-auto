import React from 'react'
import privacyCss from "./styles/privacy.module.css"

const PrivacyPolicy = () => {
  return (
    <>
      <div className={privacyCss.privacy_first}>
        <div className="container">
          <div className="text-center">
            <h1>Privacy Policy</h1>
            <p>Effective May, 01 2026</p>
          </div>
        </div>
      </div>

      <div className={privacyCss.privacy_second}>
        <div className="container">
          <div>
            <div className="d-flex justify-content-start align-items-start gap-4" id={privacyCss.pill_tab_block}>
              <div className={privacyCss.pill_tab_btn}>
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <button className="nav-link active" id="v-pills-online-tab" data-bs-toggle="pill" data-bs-target="#v-pills-online" type="button" role="tab" aria-controls="v-pills-online" aria-selected="true">Type of information we collect online</button>
                  <button className="nav-link" id="v-pills-information-tab" data-bs-toggle="pill" data-bs-target="#v-pills-information" type="button" role="tab" aria-controls="v-pills-information" aria-selected="false">How we use your information</button>
                  <button className="nav-link" id="v-pills-data-tab" data-bs-toggle="pill" data-bs-target="#v-pills-data" type="button" role="tab" aria-controls="v-pills-data" aria-selected="false">Data security</button>
                  <button className="nav-link" id="v-pills-choice-tab" data-bs-toggle="pill" data-bs-target="#v-pills-choice" type="button" role="tab" aria-controls="v-pills-choice" aria-selected="false">Your privacy choice</button>
                  <button className="nav-link" id="v-pills-third-party-tab" data-bs-toggle="pill" data-bs-target="#v-pills-third-party" type="button" role="tab" aria-controls="v-pills-third-party" aria-selected="false">Thirt party site and social media</button>
                  <button className="nav-link" id="v-pills-contact-tab" data-bs-toggle="pill" data-bs-target="#v-pills-contact" type="button" role="tab" aria-controls="v-pills-contact" aria-selected="false">Contact details</button>
                </div>
              </div>
              <div className={privacyCss.pill_main_content}>
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-online" role="tabpanel" aria-labelledby="v-pills-online-tab" tabIndex="0">
                    <h3>Type of information we collect online</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat facere ipsa veniam esse explicabo obcaecati culpa debitis autem velit. Magnam iure atque optio vitae molestias rerum sequi eos! Quidem quis labore similique vitae laudantium delectus, iusto officiis sapiente nemo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nemo accusamus harum, dicta delectus sequi a aliquid officiis repudiandae? Odio.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum mollitia repellendus eos facilis magni a fugiat quis, natus inventore fugit architecto laudantium rem ullam blanditiis reiciendis est, consequuntur eius commodi odio. Hic quasi eum eos sunt illum totam ab officia enim maiores natus, modi sint, quos quibusdam fugit recusandae repellendus aut consequatur at quidem vitae deserunt accusantium, iusto quae rerum? Officia placeat asperiores dicta repudiandae animi recusandae, sint cumque inventore nemo voluptas similique doloribus accusamus officiis modi quaerat commodi? Voluptas cum, architecto vero veritatis ullam in magni quod necessitatibus neque qui itaque harum? Molestias voluptatum tempora vitae nesciunt reiciendis iusto provident tempore dolor inventore reprehenderit natus distinctio odio earum quaerat porro alias numquam totam, nulla aliquam. Nobis, natus. Cumque, quidem pariatur sint vel illo id corporis aperiam autem odio tempora. Similique veritatis repellat sit alias dignissimos dicta, commodi inventore molestiae. Enim quae ut blanditiis sint eveniet quas non vero deleniti!</p>
                  </div>
                  <div className="tab-pane fade" id="v-pills-information" role="tabpanel" aria-labelledby="v-pills-information-tab" tabIndex="0">
                    <h3>Type of information we collect online</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat facere ipsa veniam esse explicabo obcaecati culpa debitis autem velit. Magnam iure atque optio vitae molestias rerum sequi eos! Quidem quis labore similique vitae laudantium delectus, iusto officiis sapiente nemo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nemo accusamus harum, dicta delectus sequi a aliquid officiis repudiandae? Odio.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum mollitia repellendus eos facilis magni a fugiat quis, natus inventore fugit architecto laudantium rem ullam blanditiis reiciendis est, consequuntur eius commodi odio. Hic quasi eum eos sunt illum totam ab officia enim maiores natus, modi sint, quos quibusdam fugit recusandae repellendus aut consequatur at quidem vitae deserunt accusantium, iusto quae rerum? Officia placeat asperiores dicta repudiandae animi recusandae, sint cumque inventore nemo voluptas similique doloribus accusamus officiis modi quaerat commodi? Voluptas cum, architecto vero veritatis ullam in magni quod necessitatibus neque qui itaque harum? Molestias voluptatum tempora vitae nesciunt reiciendis iusto provident tempore dolor inventore reprehenderit natus distinctio odio earum quaerat porro alias numquam totam, nulla aliquam. Nobis, natus. Cumque, quidem pariatur sint vel illo id corporis aperiam autem odio tempora. Similique veritatis repellat sit alias dignissimos dicta, commodi inventore molestiae. Enim quae ut blanditiis sint eveniet quas non vero deleniti!</p>
                  </div>
                  <div className="tab-pane fade" id="v-pills-data" role="tabpanel" aria-labelledby="v-pills-data-tab" tabIndex="0">
                    <h3>Type of information we collect online</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat facere ipsa veniam esse explicabo obcaecati culpa debitis autem velit. Magnam iure atque optio vitae molestias rerum sequi eos! Quidem quis labore similique vitae laudantium delectus, iusto officiis sapiente nemo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nemo accusamus harum, dicta delectus sequi a aliquid officiis repudiandae? Odio.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum mollitia repellendus eos facilis magni a fugiat quis, natus inventore fugit architecto laudantium rem ullam blanditiis reiciendis est, consequuntur eius commodi odio. Hic quasi eum eos sunt illum totam ab officia enim maiores natus, modi sint, quos quibusdam fugit recusandae repellendus aut consequatur at quidem vitae deserunt accusantium, iusto quae rerum? Officia placeat asperiores dicta repudiandae animi recusandae, sint cumque inventore nemo voluptas similique doloribus accusamus officiis modi quaerat commodi? Voluptas cum, architecto vero veritatis ullam in magni quod necessitatibus neque qui itaque harum? Molestias voluptatum tempora vitae nesciunt reiciendis iusto provident tempore dolor inventore reprehenderit natus distinctio odio earum quaerat porro alias numquam totam, nulla aliquam. Nobis, natus. Cumque, quidem pariatur sint vel illo id corporis aperiam autem odio tempora. Similique veritatis repellat sit alias dignissimos dicta, commodi inventore molestiae. Enim quae ut blanditiis sint eveniet quas non vero deleniti!</p>
                  </div>
                  <div className="tab-pane fade" id="v-pills-choice" role="tabpanel" aria-labelledby="v-pills-choice-tab" tabIndex="0">
                    <h3>Type of information we collect online</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat facere ipsa veniam esse explicabo obcaecati culpa debitis autem velit. Magnam iure atque optio vitae molestias rerum sequi eos! Quidem quis labore similique vitae laudantium delectus, iusto officiis sapiente nemo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nemo accusamus harum, dicta delectus sequi a aliquid officiis repudiandae? Odio.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum mollitia repellendus eos facilis magni a fugiat quis, natus inventore fugit architecto laudantium rem ullam blanditiis reiciendis est, consequuntur eius commodi odio. Hic quasi eum eos sunt illum totam ab officia enim maiores natus, modi sint, quos quibusdam fugit recusandae repellendus aut consequatur at quidem vitae deserunt accusantium, iusto quae rerum? Officia placeat asperiores dicta repudiandae animi recusandae, sint cumque inventore nemo voluptas similique doloribus accusamus officiis modi quaerat commodi? Voluptas cum, architecto vero veritatis ullam in magni quod necessitatibus neque qui itaque harum? Molestias voluptatum tempora vitae nesciunt reiciendis iusto provident tempore dolor inventore reprehenderit natus distinctio odio earum quaerat porro alias numquam totam, nulla aliquam. Nobis, natus. Cumque, quidem pariatur sint vel illo id corporis aperiam autem odio tempora. Similique veritatis repellat sit alias dignissimos dicta, commodi inventore molestiae. Enim quae ut blanditiis sint eveniet quas non vero deleniti!</p>
                  </div>
                  <div className="tab-pane fade" id="v-pills-third-party" role="tabpanel" aria-labelledby="v-pills-third-party-tab" tabIndex="0">
                    <h3>Type of information we collect online</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat facere ipsa veniam esse explicabo obcaecati culpa debitis autem velit. Magnam iure atque optio vitae molestias rerum sequi eos! Quidem quis labore similique vitae laudantium delectus, iusto officiis sapiente nemo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nemo accusamus harum, dicta delectus sequi a aliquid officiis repudiandae? Odio.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum mollitia repellendus eos facilis magni a fugiat quis, natus inventore fugit architecto laudantium rem ullam blanditiis reiciendis est, consequuntur eius commodi odio. Hic quasi eum eos sunt illum totam ab officia enim maiores natus, modi sint, quos quibusdam fugit recusandae repellendus aut consequatur at quidem vitae deserunt accusantium, iusto quae rerum? Officia placeat asperiores dicta repudiandae animi recusandae, sint cumque inventore nemo voluptas similique doloribus accusamus officiis modi quaerat commodi? Voluptas cum, architecto vero veritatis ullam in magni quod necessitatibus neque qui itaque harum? Molestias voluptatum tempora vitae nesciunt reiciendis iusto provident tempore dolor inventore reprehenderit natus distinctio odio earum quaerat porro alias numquam totam, nulla aliquam. Nobis, natus. Cumque, quidem pariatur sint vel illo id corporis aperiam autem odio tempora. Similique veritatis repellat sit alias dignissimos dicta, commodi inventore molestiae. Enim quae ut blanditiis sint eveniet quas non vero deleniti!</p>
                  </div>
                  <div className="tab-pane fade" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab" tabIndex="0">
                    <h3>Type of information we collect online</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat facere ipsa veniam esse explicabo obcaecati culpa debitis autem velit. Magnam iure atque optio vitae molestias rerum sequi eos! Quidem quis labore similique vitae laudantium delectus, iusto officiis sapiente nemo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nemo accusamus harum, dicta delectus sequi a aliquid officiis repudiandae? Odio.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum mollitia repellendus eos facilis magni a fugiat quis, natus inventore fugit architecto laudantium rem ullam blanditiis reiciendis est, consequuntur eius commodi odio. Hic quasi eum eos sunt illum totam ab officia enim maiores natus, modi sint, quos quibusdam fugit recusandae repellendus aut consequatur at quidem vitae deserunt accusantium, iusto quae rerum? Officia placeat asperiores dicta repudiandae animi recusandae, sint cumque inventore nemo voluptas similique doloribus accusamus officiis modi quaerat commodi? Voluptas cum, architecto vero veritatis ullam in magni quod necessitatibus neque qui itaque harum? Molestias voluptatum tempora vitae nesciunt reiciendis iusto provident tempore dolor inventore reprehenderit natus distinctio odio earum quaerat porro alias numquam totam, nulla aliquam. Nobis, natus. Cumque, quidem pariatur sint vel illo id corporis aperiam autem odio tempora. Similique veritatis repellat sit alias dignissimos dicta, commodi inventore molestiae. Enim quae ut blanditiis sint eveniet quas non vero deleniti!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy