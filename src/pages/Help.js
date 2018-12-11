import React, { Component } from 'react';
import debounce from 'lodash/debounce';

// Icons
import { IconChat, IconPhone } from "../icons";
import {SectionLabel} from "../components/SectionLabel";

import {Card, Collapsible} from "../components";

import axios from 'axios';

const rootURL = 'https://mobileprototype.indiana.edu';


export class Help extends Component {

    constructor(props) {
        super(props)
        this.state = {
            suggestions: [],
            popular: [],
            subject: "",
            loading: false,
            submitted: false,
            topics: [
                {
                    title: "Accounts & login",
                    links:
                        [
                            {
                                'title': 'Learn about Two-Step Login (Duo)',
                                'url': 'https://kb.iu.edu/d/aluu'
                            },
                            {
                                'title': 'Central Authentication Service (CAS) basics',
                                'url': 'https://kb.iu.edu/d/auth'
                            },
                            {
                                'title': 'Accounts, usernames, and passphrases',
                                'url': 'https://kb.iu.edu/d/apdz'
                            },
                            {
                                'title': 'CrimsonCard at IU',
                                'url': 'https://kb.iu.edu/d/apbd'
                            },
                            {
                                'title': 'Security',
                                'url': 'https://kb.iu.edu/d/hack'
                            },
                            {
                                'title': 'Google at IU (G Suite for Education)',
                                'url': 'https://kb.iu.edu/d/agvh'
                            }
                        ],
                    keywords: ['duo', 'cas', 'account', 'card', 'security', 'google', 'passphrase']
                },
                {
                    title: "Canvas & learning",
                    links:
                        [
                            {
                                'title': 'Learn about Canvas',
                                'url': 'https://kb.iu.edu/d/bexp'
                            },
                            {
                                'title': 'Libraries at IU',
                                'url': 'https://kb.iu.edu/d/auws'
                            },
                            {
                                'title': 'Training and workshops',
                                'url': 'https://kb.iu.edu/d/amec'
                            }
                        ],
                    keywords: ['canvas']
                },
                {
                    title: "Email at IU",
                    links:
                        [
                            {
                                'title': 'Learn about Email at IU',
                                'url': 'https://kb.iu.edu/d/apfi'
                            }
                        ],
                    keywords: ['email']
                },

                {
                    title: "Software & hardware",
                    links:
                        [
                            {
                                'title': 'Computing labs at IU',
                                'url': 'https://kb.iu.edu/d/site'
                            },
                            {
                                'title': 'Hardware at IU',
                                'url': 'https://kb.iu.edu/d/hdwr'
                            },
                            {
                                'title': 'IUanyWare (virtualization at IU)',
                                'url': 'https://kb.iu.edu/d/bdlc'
                            },
                            {
                                'title': 'Mobile devices',
                                'url': 'https://kb.iu.edu/d/bcyx'
                            },
                            {
                                'title': 'Printing at IU',
                                'url': 'https://kb.iu.edu/d/bfan'
                            },
                            {
                                'title': 'Software at IU',
                                'url': 'https://kb.iu.edu/d/apex'
                            }
                        ],
                    keywords: ['printing', 'adobe', 'iuanyware', 'iuware']
                },
                {
                    title: "Computer basics",
                    links:
                        [
                            {
                                'title': 'Computer basics',
                                'url': 'https://kb.iu.edu/d/apfn'
                            },
                            {
                                'title': 'Connecting to the internet',
                                'url': 'https://kb.iu.edu/d/bbcy'
                            }
                        ],
                    keywords: ['windows', 'mac', 'internet', 'wifi', 'wireless']
                },
                {
                    title: "Box",
                    links:
                        [
                            {
                                'title': 'Learn about Box',
                                'url': 'https://kb.iu.edu/d/bbro'
                            }
                        ],
                    keywords: ['box', 'storage']
                },
                {
                    title: "Accessibility at IU",
                    links:
                        [
                            {
                                'title': 'Learn about Accessibility at IU',
                                'url': 'https://kb.iu.edu/d/anms'
                            }
                        ],
                    keywords: ['accessibility']
                }
            ]
        }

        this.handleSubject = this.handleSubject.bind(this)
        this.handleSupportForm = this.handleSupportForm.bind(this)
        this.findSuggestions = debounce(this.findSuggestions.bind(this),800);
    }

    handleSupportForm(e) {
        this.setState({submitted: true})
        e.preventDefault()

    }

    handleSubject(e) {
        this.setState({subject: e.target.value})
    }

    findSuggestions(e) {
        const subject = this.state.subject;
        const vm = this
        let suggestions = []


        //todo: improve pressing shift so it doesn't toggle the loading icon
        // guessing we can record the last pressed key until blurred and if
        // the last pressed key is non-alphanumeric then we can ignore it


        if(!vm.state.subject) {
            suggestions = []
            vm.setState({suggestions})
            return
        }

        vm.setState({loading:true})


        // todo: make this mess use axios
        // Send an anonymous GET request to the KMS REST API.
        let request = new XMLHttpRequest()
        request.open('GET', rootURL + '/api/kb/search?q=' + subject, {
            headers: {'Access-Control-Allow-Origin': '*'}
        })
        request.onreadystatechange = () => {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    let response = JSON.parse(request.responseText);
                    suggestions = response
                    vm.setState({suggestions})

                } else {
                    suggestions = []
                    vm.setState({suggestions})

                }
            }
            vm.setState({loading:false})
        };
        request.send()
        // end todo
    }


    componentWillMount() {

        const vm = this
        axios(rootURL + '/api/kb/analytics')
            .then((res) => {
                vm.setState({
                    popular: res.data
                })

                return true
            })


        // calculate the topics order based on support center issues
        setTimeout(function() {

            const topics = this.state.topics

            const newTopics = []

            axios(rootURL + '/api/support/analytics')
                .then((res) => {

                    let title
                    let keywords
                    let found
                    const vm = this

                    // look at the top 7 support categories
                    res.data.slice(0,7).map((category,index) => {


                        title = category.category.toLowerCase()

                        // loop through the topics and see if its keywords match the title
                        let foundTopic = topics.find(topic => {
                            keywords = topic.keywords

                            found = keywords.find(keyword => {
                                return title.includes(keyword)
                            })

                            return found

                        })

                        if(foundTopic && !newTopics.find(topic=>topic.title === foundTopic.title)) {
                            newTopics.push(foundTopic)
                        }

                        return false

                    })

                    topics.map(topic => {
                        if(!newTopics.find(t=>topic.title === t.title)) {
                            newTopics.push(topic)
                        }

                        return false
                    })

                    vm.setState({topics:newTopics})

                })

        }.bind(this),200)
    }

    render() {

        return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-4" aria-labelledby="t-four">


            <SectionLabel className="rvt-m-top-remove">Help articles</SectionLabel>

            <div className="cards">
                <Card details={
                    <div className="campus">
                        <div className="campus__icon rvt-text-center rvt-m-right-sm">
                            <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.18323 12.6004C3.70585 12.6004 3.24802 12.4107 2.91046 12.0732C2.5729 11.7356 2.38326 11.2778 2.38326 10.8004V9.4504C2.38326 8.85367 2.62031 8.28138 3.04226 7.85943C3.46421 7.43748 4.0365 7.20043 4.63323 7.20043H5.78521C6.23813 7.22619 6.6858 7.09274 7.05069 6.82318C7.41558 6.55363 7.6747 6.16494 7.78318 5.72445C7.83116 5.46248 7.8204 5.19314 7.75169 4.93583C7.68298 4.67852 7.55803 4.43967 7.38584 4.23649C7.21366 4.03331 6.99854 3.87088 6.75598 3.76089C6.51343 3.65091 6.24949 3.59612 5.98321 3.60048H2.38326C1.90587 3.60048 1.44804 3.41084 1.11048 3.07328C0.772922 2.73572 0.583282 2.27789 0.583282 1.8005C0.583282 1.32312 0.772922 0.865291 1.11048 0.52773C1.44804 0.190169 1.90587 0.000529529 2.38326 0.000529529H5.98321C6.77484 -0.0105571 7.55923 0.152566 8.28081 0.478345C9.00239 0.804123 9.64351 1.28459 10.1588 1.8857C10.674 2.48681 11.0507 3.19387 11.2623 3.95679C11.4739 4.7197 11.5152 5.51981 11.3831 6.30044C11.1418 7.55904 10.472 8.69519 9.48749 9.5156C8.503 10.336 7.26469 10.79 5.98321 10.8004C5.98321 11.2778 5.79357 11.7356 5.45601 12.0732C5.11845 12.4107 4.66061 12.6004 4.18323 12.6004Z" fill="#006298"/>
                                <path d="M4.18324 18.0003C3.94803 17.9975 3.71565 17.9486 3.49925 17.8563C3.2783 17.7707 3.07645 17.6422 2.90526 17.4783C2.73844 17.3101 2.60645 17.1107 2.51688 16.8914C2.4273 16.6721 2.3819 16.4372 2.38327 16.2003C2.38611 15.9651 2.43504 15.7328 2.52727 15.5164C2.61294 15.2954 2.74139 15.0935 2.90526 14.9224C3.11481 14.7148 3.37214 14.562 3.65462 14.4772C3.93709 14.3925 4.23606 14.3785 4.52524 14.4364C4.64431 14.4537 4.7598 14.4902 4.86724 14.5444C4.98211 14.5834 5.09111 14.6379 5.19123 14.7064L5.46123 14.9224C5.62791 15.0913 5.75676 15.2938 5.83922 15.5164C5.97706 15.8442 6.01472 16.2054 5.94745 16.5546C5.88018 16.9038 5.71099 17.2252 5.46123 17.4783C5.28605 17.637 5.0852 17.7649 4.86724 17.8563C4.65084 17.9486 4.41846 17.9975 4.18324 18.0003Z" fill="#006298"/>
                            </svg>
                        </div>
                        <div className="rvt-text-left">
                            <div className="campus__title rvt-text-bold">
                                Find your answer quickly
                            </div>
                            <div className="rvt-ts-12 campus__description">
                                Check out our help documents
                            </div>
                        </div>
                    </div>
                } />
                <Card title="Finals week">
                    <p className="rvt-color-gray rvt-ts-14 rvt-m-top-remove">Final examinations will be given from <strong>Monday, December 10</strong>, through <strong>Friday, December 14</strong>.</p>
                    <ol className="rvt-plain-list">
                        <li>
                            <a href="https://kb.iu.edu/d/bfiz">Submit papers directly to Turnitin</a>
                        </li>
                        <li>
                            <a href="https://kb.iu.edu/d/bftk">About Examity at IU</a>
                        </li>
                        <li>
                            <a href="https://one.iu.edu/launch-task/iu/grades">View my grades</a>
                        </li>
                    </ol>

                    <div className="rvt-text-bold card__title rvt-m-top-md">Popular articles</div>
                    <ol className="rvt-plain-list">

                        { this.state.popular.slice(0, 5).map(article => <li key={'5' + article.pageTitle}>
                            <a href={`https://kb.iu.edu${article.url}`}>{article.pageTitle}</a>
                        </li>)}

                    </ol>
                </Card>
            </div>


            <SectionLabel className="rvt-m-top-lg">Help topics</SectionLabel>
            <div className="cards">
                <Card details={
                    <div className="campus">
                        <div className="campus__icon rvt-m-right-sm">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 4C14.1045 4 15 3.10457 15 2C15 0.89543 14.1045 0 13 0C11.8954 0 11 0.89543 11 2C11 3.10457 11.8954 4 13 4Z" fill="#006298"/>
                                <path d="M4.99997 4C6.10454 4 6.99997 3.10457 6.99997 2C6.99997 0.89543 6.10454 0 4.99997 0C3.8954 0 2.99997 0.89543 2.99997 2C2.99997 3.10457 3.8954 4 4.99997 4Z" fill="#006298"/>
                                <path d="M8.99997 7C10.1045 7 11 6.10457 11 5C11 3.89543 10.1045 3 8.99997 3C7.8954 3 6.99997 3.89543 6.99997 5C6.99997 6.10457 7.8954 7 8.99997 7Z" fill="#006298"/>
                                <path d="M12 16H5.99997C5.73475 16 5.4804 15.8946 5.29286 15.7071C5.10533 15.5196 4.99997 15.2652 4.99997 15V12C4.99997 10.9391 5.4214 9.92172 6.17154 9.17157C6.92169 8.42143 7.9391 8 8.99997 8C10.0608 8 11.0783 8.42143 11.8284 9.17157C12.5785 9.92172 13 10.9391 13 12V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5195 15.8946 12.2652 16 12 16Z" fill="#006298"/>
                                <path d="M5.49998 5C4.65625 4.8784 3.79742 5.0744 3.08998 5.55C2.43358 5.98264 1.89758 6.57464 1.53208 7.27066C1.16657 7.96669 0.983507 8.74402 0.999984 9.53V12C0.999984 12.2652 1.10534 12.5196 1.29288 12.7071C1.48041 12.8946 1.73477 13 1.99998 13H3.49998V12C3.50024 11.0239 3.76074 10.0655 4.25466 9.2235C4.74859 8.38155 5.45806 7.68651 6.30998 7.21C5.79075 6.59021 5.50426 5.80854 5.49998 5Z" fill="#006298"/>
                                <path d="M12.5 5C13.3437 4.8784 14.2025 5.0744 14.91 5.55C15.5664 5.98264 16.1024 6.57464 16.4679 7.27066C16.8334 7.96669 17.0164 8.74402 17 9.53V12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5195 12.8946 16.2652 13 16 13H14.5V12C14.4997 11.0239 14.2392 10.0655 13.7453 9.2235C13.2514 8.38155 12.5419 7.68651 11.69 7.21C12.2092 6.59021 12.4957 5.80854 12.5 5Z" fill="#006298"/>
                            </svg>
                        </div>
                        <div className="rvt-text-left">
                            <div className="campus__title rvt-text-bold">
                                Browse support topics
                            </div>
                            <div className="rvt-ts-12 campus__description">
                                Discover how we can help you
                            </div>
                        </div>
                    </div>
                } />
                <Collapsible>
                    { this.state.topics.map((topic, index) => <Card key={topic.title + '3'} className="rvt-p-all-remove" label={index === 0 ? "🔥" : ''}  title={topic.title}>
                            <ul className="rvt-m-feed rvt-m-all-remove rvt-p-remove-all">
                                {topic.links && topic.links.map(link=><li key={link.url + '2'} className="rvt-m-feed__item rvt-p-all-remove">
                                    <a href={link.url} className="rvt-display-block accordion-link">{link.title}</a>
                                </li>)}
                            </ul>
                        </Card>
                    )}
                </Collapsible>
            </div>



            <SectionLabel className="rvt-m-top-lg">Ask for help</SectionLabel>
            <div className="cards">
                <Card details={
                    <div className="campus">
                        <div className="campus__icon rvt-m-right-sm">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 3H2.5C2.10218 3 1.72064 3.15804 1.43934 3.43934C1.15804 3.72064 1 4.10218 1 4.5V12.5C1 12.8978 1.15804 13.2794 1.43934 13.5607C1.72064 13.842 2.10218 14 2.5 14H13.5C13.8978 14 14.2794 13.842 14.5607 13.5607C14.842 13.2794 15 12.8978 15 12.5V4.5C15 4.10218 14.842 3.72064 14.5607 3.43934C14.2794 3.15804 13.8978 3 13.5 3ZM11.41 5L8 7.77L4.59 5H11.41ZM3 12V6.29L7.11 9.62L7.23 9.7C7.46272 9.8392 7.72882 9.91272 8 9.91272C8.27118 9.91272 8.53728 9.8392 8.77 9.7L13 6.29V12H3Z" fill="#006298"/>
                            </svg>
                        </div>
                        <div className="rvt-text-left">
                            <div className="campus__title rvt-text-bold">
                                Email support center
                            </div>
                            <div className="rvt-ts-12 campus__description">
                                Get in touch with the support center
                            </div>
                        </div>
                    </div>
                } />
                <div className="card rvt-p-all-sm rvt-p-top-xs">
                    {!this.state.submitted &&
                    <form onSubmit={this.handleSupportForm} method="POST" className="rvt-m-lr-xs">

                        <div className="rvt-m-top-md">
                            <fieldset>
                                <legend className="rvt-text-bold">What kind of issue are you having?</legend>
                                <ul className="rvt-plain-list rvt-m-top-sm">
                                    <li>
                                        <input type="radio" name="technology" id="technology" />
                                        <label htmlFor="technology" className="rvt-m-right-md">
                                            Technology
                                            <span className="issue-label">
                            Like computers, mobile devices, or software
                        </span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" name="technology" id="account" />
                                        <label htmlFor="account" className="rvt-m-right-md">Accounts
                                            <span className="issue-label">
                        Like logging in or third party access
                        </span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" name="technology" id="other" />
                                        <label htmlFor="other" className="rvt-m-right-md">Other</label>
                                    </li>
                                </ul>
                            </fieldset>
                        </div>

                        <p className="rvt-text-bold rvt-m-bottom-remove">Send us a message to help us understand the problem.</p>


                        <label htmlFor="subject" className="rvt-m-top-md">Subject</label>
                        <input type="text" id="subject" onKeyUp={this.findSuggestions} onChange={this.handleSubject} value={this.state.subject} />

                        {this.state.loading && <div className="rvt-m-top-lg"><div className="rvt-loader rvt-loader--sm" aria-label="Loading KB articles"></div></div>}

                        {this.state.suggestions.length > 0 &&
                        <React.Fragment>
                            <p className="rvt-text-bold">Articles that may already have your answer</p>
                            <ul className="suggestions rvt-plain-list">
                                {this.state.suggestions.map(suggestion =>
                                    <li key={suggestion.title + '1'}>
                                        <a rel="noopener noreferrer" target="_blank" href={`https://kb.iu.edu/d/${suggestion.docid}`}>{suggestion.title}</a>
                                    </li>
                                )}
                            </ul>
                        </React.Fragment>
                        }

                        <label className="rvt-m-top-md" htmlFor="description">Description</label>
                        <textarea id="description"></textarea>

                        <div className="rvt-file rvt-m-top-md" data-upload="attachment">
                            <input type="file" id="attachment" aria-describedby="file-description" />
                            <label htmlFor="attachment" className="rvt-button rvt-button--secondary">
                                <span>Upload screenshot</span>
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path fill="currentColor"
                                          d="M10.41,1H3.5A1.3,1.3,0,0,0,2.2,2.3V13.7A1.3,1.3,0,0,0,3.5,15h9a1.3,1.3,0,0,0,1.3-1.3V4.39ZM11.8,5.21V6H9.25V3h.34ZM4.2,13V3h3V6.75A1.25,1.25,0,0,0,8.5,8h3.3v5Z"/>
                                </svg>
                            </label>
                            <div className="rvt-file__preview" data-file-preview="attachment" id="file-description">
                                No screenshot selected
                            </div>
                        </div>


                        <fieldset className="rvt-m-top-md">
                            <legend className="rvt-text-bold rvt-ts-14">Contact method</legend>
                            <ul className="rvt-plain-list">
                                <li>
                                    <input type="radio" name="method" id="phone" />
                                    <label htmlFor="phone" className="rvt-m-right-md">Phone</label>
                                </li>
                                <li>
                                    <input type="radio" name="method" id="email" />
                                    <label htmlFor="email">Email</label>
                                </li>
                            </ul>
                        </fieldset>

                        <button className="rvt-button rvt-button--full-width rvt-m-tb-md">Create ticket</button>
                    </form>
                    }

                    {this.state.submitted &&
                    <div className="rvt-inline-alert rvt-m-left-md rvt-inline-alert--success">
              <span className="rvt-inline-alert__icon">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                      <g fill="currentColor">
                          <path
                              d="M10.2,5.4,7.1,9.53,5.67,8.25a1,1,0,1,0-1.34,1.5l2.05,1.82a1.29,1.29,0,0,0,.83.32h.12a1.23,1.23,0,0,0,.88-.49L11.8,6.6a1,1,0,1,0-1.6-1.2Z"/>
                          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z"/>
                      </g>
                  </svg>
              </span>
                        <span className="rvt-inline-alert__message" role="alert" id="radio-list-message">
                  Your ticket has been created <a href="https://footprints.iu.edu/portal">#59284</a>
              </span>
                    </div>
                    }
                </div>
                <a href="tel:8128556789" className="rvt-border-top rvt-display-block">
                    <Card details={
                        <div className="campus">
                            <div className="campus__icon rvt-m-right-sm">
                                { IconPhone }
                            </div>
                            <div className="rvt-text-left">
                                <div className="campus__title rvt-text-bold">
                                    Call
                                </div>
                                <div className="rvt-ts-12 campus__description">
                                    Talk with a consultant
                                </div>
                            </div>
                        </div>
                    } />
                </a>
                <a href="http://ithelplive.iu.edu" className="rvt-border-top rvt-display-block">
                    <Card details={
                        <div className="campus">
                            <div className="campus__icon rvt-m-right-sm">
                                { IconChat }
                            </div>
                            <div className="rvt-text-left">
                                <div className="campus__title rvt-text-bold">
                                    Chat
                                </div>
                                <div className="rvt-ts-12 campus__description">
                                    Chat with someone from support
                                </div>
                            </div>
                        </div>
                    } />
                </a>
            </div>
        </div>;
    }
}
