import React from 'react';
import AOSDemo from '../components/Common/AOSDemo';

const AOSDemoPage = () => {
  return (
    <div className="aos-demo-page">
      {/* Page Header */}
      <div className="breadcumb-wrapper" style={{backgroundColor: '#001243'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-content text-center">
                <h1 className="breadcumb-title text-white" data-aos="fade-up">
                  AOS Animation Demo
                </h1>
                <p className="breadcumb-text text-white-50" data-aos="fade-up" data-aos-delay="200">
                  Explore different Animate On Scroll (AOS) animations and learn how to implement them
                </p>
                <ul className="breadcumb-menu" data-aos="fade-up" data-aos-delay="400">
                  <li><a href="/" className="text-white-50">Home</a></li>
                  <li className="text-white">AOS Demo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Demo Content */}
      <AOSDemo />
      
      {/* Additional Information */}
      <section className="py-5" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <h3 className="mb-4 text-center" data-aos="fade-up">
                    AOS Implementation in This Project
                  </h3>
                  
                  <div className="row">
                    <div className="col-md-6" data-aos="fade-right">
                      <h5>Installation</h5>
                      <pre className="bg-light p-3 rounded">
                        <code>
{`npm install aos
npm install @types/aos --save-dev`}
                        </code>
                      </pre>
                      
                      <h5 className="mt-4">CSS Import</h5>
                      <pre className="bg-light p-3 rounded">
                        <code>
{`<!-- In public/index.html -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="col-md-6" data-aos="fade-left">
                      <h5>JavaScript Initialization</h5>
                      <pre className="bg-light p-3 rounded">
                        <code>
{`// In App.tsx
import AOS from 'aos';

React.useEffect(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    offset: 100,
  });
}, []);`}
                        </code>
                      </pre>
                    </div>
                  </div>
                  
                  <div className="mt-4" data-aos="fade-up" data-aos-delay="200">
                    <h5>Configuration Options</h5>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Option</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><code>duration</code></td>
                            <td>number</td>
                            <td>1200</td>
                            <td>Duration of animation (ms)</td>
                          </tr>
                          <tr>
                            <td><code>easing</code></td>
                            <td>string</td>
                            <td>'ease'</td>
                            <td>Choose timing function to ease elements in different ways</td>
                          </tr>
                          <tr>
                            <td><code>once</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether animation should happen only once</td>
                          </tr>
                          <tr>
                            <td><code>mirror</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether elements should animate out while scrolling past them</td>
                          </tr>
                          <tr>
                            <td><code>offset</code></td>
                            <td>number</td>
                            <td>120</td>
                            <td>Offset (in px) from the original trigger point</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center" data-aos="zoom-in" data-aos-delay="400">
                    <h5>Popular Animation Types</h5>
                    <div className="row mt-3">
                      <div className="col-md-3 mb-2">
                        <span className="badge bg-primary">fade-up</span>
                      </div>
                      <div className="col-md-3 mb-2">
                        <span className="badge bg-success">fade-down</span>
                      </div>
                      <div className="col-md-3 mb-2">
                        <span className="badge bg-warning">fade-left</span>
                      </div>
                      <div className="col-md-3 mb-2">
                        <span className="badge bg-info">fade-right</span>
                      </div>
                      <div className="col-md-3 mb-2">
                        <span className="badge bg-secondary">zoom-in</span>
                      </div>
                      <div className="col-md-3 mb-2">
                        <span className="badge bg-dark">zoom-out</span>
                      </div>
                      <div className="col-md-3 mb-2">
                        <span className="badge bg-danger">flip-left</span>
                      </div>
                      <div className="col-md-3 mb-2">
                        <span className="badge bg-primary">slide-up</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AOSDemoPage;