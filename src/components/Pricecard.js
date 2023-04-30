import React from 'react'

function Pricecard(props) {
  return (
    <>
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.val.product}</h5>
            <h6 class="card-price text-center">${props.val.price}<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li class = {props.val.userEnabler?"":"text-muted"}><span class="fa-li">{props.val.userEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.val.userBold?<b>{props.val.user}</b>:props.val.user}</li>
              <li class = {props.val.storageEnabler?"":"text-muted"}><span class="fa-li">{props.val.storageEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.val.storage}</li>
              <li class = {props.val.publicprojectsEnabler?"":"text-muted"}><span class="fa-li">{props.val.publicprojectsEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.val.publicprojects}</li>
              <li class = {props.val.communityEnabler?"":"text-muted"}><span class="fa-li">{props.val.communityEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.val.community}</li>
              <li class = {props.val.privateprojectsEnabler?"":"text-muted"}><span class="fa-li">{props.val.privateprojectsEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.val.privateprojects}</li>
              <li class = {props.val.supportEnabler?"":"text-muted"}><span class="fa-li">{props.val.supportEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.val.support}</li>
              <li class = {props.val.subdomainEnabler?"":"text-muted"}><span class="fa-li">{props.val.subdomainEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.val.subdomainBold?<><b>Unlimited </b>{props.val.subdomain}</>:props.val.subdomain}</li>
              <li class = {props.val.reportsEnabler?"":"text-muted"}><span class="fa-li">{props.val.reportsEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.val.reports}</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricecard