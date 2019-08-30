import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {SeoConfig} from '../../../Shared/Models';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class MetaService {
  constructor(private meta: Meta, private title: Title, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  public SetTitle(title?: string): void {
    if (!title) {
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)).subscribe((event) => {
        if (event.Title) {
          this.title.setTitle(event.Title + ' | Site name');
        } else {
          this.title.setTitle('Dip B2C | Site name');
        }
      });
    } else {
      this.title.setTitle(title + ' | Site name');
    }
  }

  public SetMetaInfo(author, description, keywords) {
    /*<!-- SEO -->*/
    this.meta.updateTag({name: 'author', content: author});
    this.meta.updateTag({name: 'description', content: description});
    this.meta.updateTag({name: 'keywords', content: keywords});
  }

  public SetMetaSocialTwitter(config: SeoConfig) {
    /*<!-- Social: Twitter -->*/
    this.meta.updateTag({name: 'twitter:card', content: 'summary'});
    this.meta.updateTag({name: 'twitter:site', content: '@angularfirebase'});
    this.meta.updateTag({name: 'twitter:title', content: config.Title});
    this.meta.updateTag({name: 'twitter:description', content: config.Description});
    this.meta.updateTag({name: 'twitter:image', content: config.Image});
    //
    // this.meta.addTag({name: 'twitter:card', content: 'summary'});
    // this.meta.addTag({name: 'twitter:site', content: '@angularSite'});
    // this.meta.addTag({name: 'twitter:creator', content: 'userName'});
    // this.meta.addTag({name: 'twitter:title', content: 'Home page'});
    // this.meta.addTag({name: 'twitter:description', content: 'An angular app that is actually search crawler bot friendly'});
    // this.meta.addTag({name: 'twitter:image:src', content: 'https://instafire-app.firebaseapp.com/assets/seo.jpeg'});
  }

  public SetMetaSocialFacebook(config: SeoConfig) {
    /*<!-- Social: Facebook / Open Graph -->*/
    this.meta.updateTag({property: 'og:type', content: 'article'});
    this.meta.updateTag({property: 'og:site_name', content: 'AngularFirebase'});
    this.meta.updateTag({property: 'og:title', content: config.Title});
    this.meta.updateTag({property: 'og:description', content: config.Description});
    this.meta.updateTag({property: 'og:image', content: config.Image});
    this.meta.updateTag({property: 'og:url', content: `https://google.com/${config.Slug}`});

    // this.meta.addTag({property: 'fb:admins', content: 'Yorum Yönetici Profil IDleri'});
    // this.meta.addTag({property: 'fb:app_id', content: 'Facebook Uygulama IDsi'});
    // this.meta.addTag({property: 'og:url', content: 'http://siteadresi.com/sayfa-adresi.html'});
    // this.meta.addTag({property: 'og:type', content: 'article'});
    // this.meta.addTag({property: 'og:title', content: 'Home Page'});
    // this.meta.addTag({property: 'og:image', content: 'http://siteadresi.com/img/sayfa-resmi.jpg'});
    // this.meta.addTag({property: 'og:description', content: 'Sayfa Açıklaması'});
    // this.meta.addTag({property: 'og:site_name', content: 'Site Adı'});
    // this.meta.addTag({property: 'article:author', content: 'https://www.facebook.com/ProfilAdresiniz'});
    // this.meta.addTag({property: 'article:publisher', content: 'https://www.facebook.com/ProfilAdresiniz'});
  }

  public SetMetaSocialGoogle(config: SeoConfig) {
    /*<!-- Social: Google+ / Schema.org -->*/
    this.meta.updateTag({name: 'name', content: config.Title});
    // this.meta.updateTag({name: 'description', content: config.Description});
    this.meta.updateTag({name: 'image', content: config.Image});
  }

  GenerateMetaTags(seoConfig?: SeoConfig) {
    // default values
    const config: SeoConfig = {
      Title: 'Angular <3', Description: 'My SEO friendly Angular Component',
      Image: 'https://google.com/images/logo.png', Slug: '', ...seoConfig
    };
    // console.log('GenerateMetaTags', config);
    this.SetMetaInfo('me!', config.Description, '');
    this.SetMetaSocialTwitter(config);
    this.SetMetaSocialFacebook(config);
    this.SetMetaSocialGoogle(config);

    // <link rel="canonical" href="http://www.siteadresi.com/sayfa-adi.html">
    // const author = meta.getTag('name=author');
    // console.log(author.content);
  }

}
