<div id="loginBackground">
  <div class="cisco_logo_small"></div>
  <div id="loginScreen">
    <div id="ciscoLogo"></div>
    <div id="language"><label id='chooseLangLabel'>Choose language:</label>
      <select id="selectLang" {{action "chooseLanguage" on="change" target="view"}}>
        <option value="en-US">English</option>
        <option value="zh">&#x7B80;&#x4F53;&#x4E2D;&#x6587;</option>
      </select>
    </div>

    <div id="loginForm" class="group">
      <div class="field_container">

        <label id="userNameLabel">User Name</label>
        {{view Ember.TextField valueBinding="userId" id="user_name" placeholder="Enter Username" autocomplete="false" class="editable" name="password"}}
      </div>
      <div class="field_container last">
        <label id="passwordLabel">Password</label>
        {{view Ember.TextField valueBinding="password" type="password" id="password" placeholder="Enter Password" class="editable" autocomplete="false"}}
      </div>
      <button id="loginBtn"
      {{action "login" on="touchEnd" }}>Login</button>
    </div>
  </div>
</div>