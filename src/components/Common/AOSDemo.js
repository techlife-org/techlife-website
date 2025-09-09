import React from 'react';

const AOSDemo = () => {
  const animations = [
    { type: 'fade-up', name: 'Fade Up', description: 'Element fades in from bottom' },
    { type: 'fade-down', name: 'Fade Down', description: 'Element fades in from top' },
    { type: 'fade-left', name: 'Fade Left', description: 'Element fades in from right' },
    { type: 'fade-right', name: 'Fade Right', description: 'Element fades in from left' },
    { type: 'zoom-in', name: 'Zoom In', description: 'Element zooms in from center' },
    { type: 'zoom-out', name: 'Zoom Out', description: 'Element zooms out from center' },
    { type: 'flip-left', name: 'Flip Left', description: 'Element flips from left' },
    { type: 'flip-right', name: 'Flip Right', description: 'Element flips from right' },
    { type: 'slide-up', name: 'Slide Up', description: 'Element slides up' },
    { type: 'slide-down', name: 'Slide Down', description: 'Element slides down' }
  ];

  return (
    <div className="aos-demo-section py-5">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="mb-4" data-aos="fade-up">AOS Animation Examples</h2>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="200">
              Scroll down to see different AOS (Animate On Scroll) animations in action.
              Each card demonstrates a different animation type.
            </p>
          </div>
        </div>
        
        <div className="row gy-4">
          {animations.map((animation, index) => (
            <div 
              key={index} 
              className="col-md-6 col-lg-4"
              data-aos={animation.type}
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center p-4">
                  <div 
                    className="mb-3 d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#0046ff',
                      borderRadius: '50%',
                      color: 'white',
                      fontSize: '24px'
                    }}
                  >
                    <i className="fas fa-magic"></i>
                  </div>
                  <h5 className="card-title mb-3" style={{color: '#001243'}}>
                    {animation.name}
                  </h5>
                  <p className="card-text text-muted mb-3">
                    {animation.description}
                  </p>
                  <code className="small bg-light p-2 rounded d-block">
                    data-aos="{animation.type}"
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Examples with Different Durations and Delays */}
        <div className="row mt-5">
          <div className="col-12 text-center mb-4">
            <h3 data-aos="fade-up">Duration and Delay Examples</h3>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="200">
              Different durations and delays for more control over animations
            </p>
          </div>
          
          <div className="col-md-4" data-aos="fade-up" data-aos-duration="500">
            <div className="card border-primary">
              <div className="card-body text-center">
                <h6>Fast Animation</h6>
                <p className="small text-muted">Duration: 500ms</p>
                <code className="small">data-aos-duration="500"</code>
              </div>
            </div>
          </div>
          
          <div className="col-md-4" data-aos="fade-up" data-aos-duration="1500">
            <div className="card border-success">
              <div className="card-body text-center">
                <h6>Normal Animation</h6>
                <p className="small text-muted">Duration: 1500ms</p>
                <code className="small">data-aos-duration="1500"</code>
              </div>
            </div>
          </div>
          
          <div className="col-md-4" data-aos="fade-up" data-aos-duration="2500">
            <div className="card border-warning">
              <div className="card-body text-center">
                <h6>Slow Animation</h6>
                <p className="small text-muted">Duration: 2500ms</p>
                <code className="small">data-aos-duration="2500"</code>
              </div>
            </div>
          </div>
        </div>
        
        {/* Easing Examples */}
        <div className="row mt-5">
          <div className="col-12 text-center mb-4">
            <h3 data-aos="fade-up">Easing Examples</h3>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="200">
              Different easing functions for varied animation feels
            </p>
          </div>
          
          <div className="col-md-3" data-aos="zoom-in" data-aos-easing="ease">
            <div className="card">
              <div className="card-body text-center">
                <h6>Ease</h6>
                <code className="small">ease</code>
              </div>
            </div>
          </div>
          
          <div className="col-md-3" data-aos="zoom-in" data-aos-easing="ease-in-out">
            <div className="card">
              <div className="card-body text-center">
                <h6>Ease In Out</h6>
                <code className="small">ease-in-out</code>
              </div>
            </div>
          </div>
          
          <div className="col-md-3" data-aos="zoom-in" data-aos-easing="ease-in-back">
            <div className="card">
              <div className="card-body text-center">
                <h6>Ease In Back</h6>
                <code className="small">ease-in-back</code>
              </div>
            </div>
          </div>
          
          <div className="col-md-3" data-aos="zoom-in" data-aos-easing="ease-out-back">
            <div className="card">
              <div className="card-body text-center">
                <h6>Ease Out Back</h6>
                <code className="small">ease-out-back</code>
              </div>
            </div>
          </div>
        </div>
        
        {/* Usage Instructions */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card bg-light">
              <div className="card-body">
                <h4 className="mb-3" data-aos="fade-up">How to Use AOS in Your Components</h4>
                <div className="row">
                  <div className="col-md-6" data-aos="fade-right">
                    <h6>Basic Usage:</h6>
                    <pre className="bg-white p-3 rounded">
                      <code>
{`<div data-aos="fade-up">
  Your content here
</div>`}
                      </code>
                    </pre>
                  </div>
                  <div className="col-md-6" data-aos="fade-left">
                    <h6>With Options:</h6>
                    <pre className="bg-white p-3 rounded">
                      <code>
{`<div 
  data-aos="zoom-in"
  data-aos-delay="300"
  data-aos-duration="1000"
  data-aos-easing="ease-in-out"
>
  Your content here
</div>`}
                      </code>
                    </pre>
                  </div>
                </div>
                <div className="mt-3" data-aos="fade-up" data-aos-delay="400">
                  <h6>Available Attributes:</h6>
                  <ul className="list-unstyled">
                    <li><code>data-aos</code> - Animation type (fade-up, zoom-in, etc.)</li>
                    <li><code>data-aos-delay</code> - Delay before animation starts (in ms)</li>
                    <li><code>data-aos-duration</code> - Animation duration (in ms)</li>
                    <li><code>data-aos-easing</code> - Easing function</li>
                    <li><code>data-aos-once</code> - Whether animation should happen only once</li>
                    <li><code>data-aos-offset</code> - Offset from original trigger point</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AOSDemo;