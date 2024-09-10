var getScriptPromisify = (src) => {
	  return new Promise(resolve => {
		$.getScript(src, resolve);
	  })
	}
	
function getIcon(type) {
	switch (type) {
		case 'RSDS':
			return 'url(data:image/png;base64,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)';
			break;
		case 'ODSO':
			return 'url(data:image/png;base64,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)';
			break;
		case 'DDLS':
			return 	'url(data:image/png;base64,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)';
			break;
		case 'TRCS':
			return 'url(data:image/png;base64,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)';
			break;
		case 'ADSO':
			return 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAtCAYAAAA+7zKnAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAATGSURBVGhD7VhbbxtFFP724vXdpia3iqgSlxYq8gASSESREDxXwAPwVAQ/oBL8BMRPoFJ/AIg+AQ+A+gxCioIEAh4ChaZQCRKaxKktX3a98d44ZzxuEpJx7AV2FSmfdWzv7uz5vjkz58zOahEBJxS6/D2ROBWfFk7Fp4WY1SaE3/fQsW2s323gXttD2/YRRBp6/RCeF8EPQ7BnTQNMXUcmoyFv6TC0CJWiiQcrGcyfraFcLMK0MuRz8jiOL9538NPtLfx4awebLaBlh3ADE6VyhQQBhk5fGLhiwXw0BJ/dY9EQhBF1FOh22sgZPqpFHXNV4KkLU3jysVnqbUG2HY1jxfu7HVy/sYpbWzo0I49cLktCWWAkBMYaOAmNejnoGHcIcN1dREEPF2ZDXL60ADNbHjRUYKT4L5d/wCfLXcxMT5PgkMTGFzouOCRBqGO7XsdrSyW8uPS0vHIYSvG/rN3BtS/qmKkVKDIUloShadSBhoMrL03jifMPy7MHocyS729uoVouwvcoEf0wcWNe5mcdKijFe24bjt2iuqJR5QhoKMlpQsZ8zMv8rEMFpfhCZQo9x0azvg5Nt0A+EVBW+UHwvxn7Zx7mY17mZx0qKMUHvod8uUY2jfrGbTS2/6CIRAipMnB1YJKQj7nsEemkNryX/Qh/ZOyfeeoba8Q7JfhZhwpK8SHlsed5NIwBSrWHUJ46h05zC62dv9DcWUe3fQ+7rgO3Z4uh5ioxrnF7vo/vZz/sj/2yf+Yp1eZFG+ZnHSooq831z7/B8q8RMlQih9BopdToA/r1PZfWAFfUao/+I/RlK8begjXAP451k1bcnFgjzGwOJv3nIYj4w0Mh4VHJXHpcw+WXn5NnDkIp/qPPVvD1zQCWoeo5dWO4jIo/w4NxQD4l7eDnaI5+oOH5iwbeeGVRnjmIkdMmkEl0tFGS+dKorPk0xOMbtZf3HscxatooxfOA+NJBWsb8iokhoBYvqgg7oQ7QPEzcZOBYhwojIk8PZeQgbRsR+GPmvFhZDw5lYia5Y8958ZxBvU/NiD/WnOceiyVbRIAcJW6csP8m8qL3cgQStwF/zGozeBAbzr1UjMXvLbiHcMy0IfG02UzLmD/WtOEaxVm//5E1aWN+1qHCyMiLuXdkMiVkcSPPK5vYQfHzx6FkSsIo+mSxEla8WxEJyyYTKFGT3DT3VVCKz1uA49LmWyRtOsb8rEMF5fN84HXx7OtX4VlzqOR5B8TNJnlmjwvea2lo92gj1N/Etx+/DSNTktcOYuRLJ99t4cq7H+DTFQdzs1PIZTTeRMkuqIdzcnBwqEhQTXe9CJtbO3h1sYBr770FM1cdNDkCI8UP0di8g/c//Ao3Vu6i2S9QBdCRy1nIGLp49afTTur+ZmqUO25El7mJqGYk1qMv1+2TjxBnLAeXFs/inTdfQG3u6BdN+zGW+P34be1nfLf6J9kGVn9vYrsdoNX1YO/Shjk0kLEKMEze6xKE2MGE4wri9R3aEwcoZnVUSxnMVAwsPPIAnlmYJzuHR89f5LvGxsTiD2MXva6Drt1Dp2uj0WzBdvro+754taHrGizTRLFgoXaminKpiFIxj3yJ3wRnBy5i4j8Qnx6UpfIk4FR8WjgVnxZOsHjgb0OwD+EodxKyAAAAAElFTkSuQmCC)';
			break;
		case 'CUBE':
			return 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAKMSURBVFhH7Zi/b9NAFMffuU0kpGbsf8LAUuYyVuovCTYKDLAytIK/AiT6a6jaf6JIsBJmmkpMtEMRY1MiIUgdm/fsy/nd+eIa9V6SgW/01eXufL6P3zuf46gUBVOsSJdTq/+At1XtNdj+9BWODr5AmirdIqEUfv0+h4PDl6BUPk8tQILbe9fB8U3dEl4pfs7OTqHRjOH9x1cQRXlyb0wxwe1ud3B4A1KFpxHyt/NTuOz+0bMWqgRstxFu5wS/NTDWWIiY4DrQJTiqOxoJWMBhWksnDeNh5LrdvmlLqGTyAhLczu4JprWJJ6ETSXiY1r7VnoEylQAzuD3ZyGVpxRuCR87YIbKq7c8Itz9cc3hzCzhVCcLhmruiNec/hstsM1QsLb+B7z+SrENK8fVPiONY18qan5+BD8evy9tMxjlzB6JGS9azcxgWnLDKTHbGfeEO7YhKmqvCTA6gvPkd6zUexmUBUqd3UEDnoDqaPjuIdgRJ1CJpA1lhJhpSCDv581HOdlS5qwHrXqGkbSK7mj0HqUXQeZScdWcZ+5loWCHsdEMe2jfN4coGBHyKeK8qoG+zD/quSMJeKG6mUoqzFknjHD5oYzyEi4YU0ieQN0u568qNGg/w71th7YdmZnIAx2Nvao2rIohKsUXUCOGDJis1gI31e+admIRDHDmDxmWC23y2AA9XFkcD5utD3nw9klUUw+bTBXi0+sD8kh6qVCuvicCmGbE0kYswck/ue+FIdgsbKGaS/k5wWxsIt+KHI/lbxyBac1uPq+FIEwGsC0cyr51JksDai7dwcTn6lTCEkn4Pnq/erQVHsv5+6/V6MBgMdE1GtIW0Wvj6WQOOVPsPzElpImvwXzTlgAB/AZuflJeRUmV2AAAAAElFTkSuQmCC)';
			break;
		case 'HCPR':
			return 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAATlSURBVFhH7VhdbxtFFD27/lrbceK4Jg4xoYkQkVCRqAoqSAghFCgFIVE+HqkiIfEDUHmoxANSX/gPvPQfQB94QZS3NtAKSFFVUYRaAvkgdXDjOI3Xjte7nLvebdfedezaVQhST3KyszOzd869M3tnNopFYB9Dda77Fg8FDoq+16DpcHOzgUrhApTqdSiV6whZNSgNnZYVWKEkDDUFJXEIVvIwRnKHMBQHZMBeI3NfAqXjxuoVWOVfoP/1BSJb8xgNAdGU0yijKqQL17LjTeUOUFLCsLInEc+/gtAj72EklWj26YCeBW5uA+UfTyJd+xJxs4JwjJUUZ0MEeIW1wx1BHJByA6hWydiTKETnMPPSp3ZzEHoSuL66APPiEeSyvBEhu4nZDTKS91lxjLix9RQmjl9DPOo33HUpVGnUuPwWcjnetE/h/aL9WcfedOxXbFwNjmJXgWsrJeSSq/em6UGDAlUNqK3PuwFtQVeBgpXb7BZmwRX5IMR6bFhUtlFxF3QrugqMhBUMpRSsrPPG7S1TJQO47BXeZ1xb1LVI29mUFbh6ugps8I1LaxYyTCWL/6go1RTodTZIRMVp14J38CAKpK+Qz5WZKovbChbXVEznWaUGS+kq0OJPo2EiTqNTWc6FaaFa47QXgGWyzPRj5wER7ArwUpyIAHU6WiwrWCqqXDJM4qxORC1MjdEmHXZ9aEfXNFMslnDgt+c4EEeQEWUeKNhWFQuhzkiUK00BKtvMtnkyGHGzvoREbAcjzMkRirXVyBvhLhViuTGL/Ox53zT7BP75d4kRqkOV0QhVCdHGFhmR3Qv1uolcJonhmIXf13REOaAiDQKvdZo1KHpmcgK4dIT5asGpJ91+bpnXngV+cOYiri3VoUU8XRVxu2mrWDZw6v0JHHt+Eq9/cgGZEW6uQaDVbS7WhbMvI/QDZ0D/qTnlQdhFoO+RWERFUhOG7jFmNqlxLfIa4XSHlQa0qFPvYwMJ9tW4xmQJNkPVH/w+0QXxQqatndJilx0/7VJbnyZVuweLA6NT0PcNHgocFP8/gZJ0uFkE0m1rJibL1x5E/g4En8CGUYde3UFVr/qo8xhc03UYpkGa2KmxnnW+fnJlfZ3tgwr0JerSVpV7r3V3J2mHwbZUIgwtFkHhdoWnneBVIkYNw8JYhol8njtJjTtJpwXFzj3vJO+cPo+FmzqP37TW5r7ktUJpB5/NPYHjLxzE0Y++wXg22WEeFe7RVax89S7w/bPc6n7uS6DvkUx6CJPjo3gsR8rVwzz5+KMHMJzUEI2Gfe1e5sfTmBhLO1b7R4BPdEeOuHZY2shgS8DtmMuVF+fGT7tdyr0iuG+noO89zB2n0Ir/VqAbNB5YjcSrzk0r9lagdxalLEcdns6v6m8j/fTHvhdEsDcCZWSXHiwvA5fxOaZfO4f0yLBT2wqfQFWOS8yBklLaKd81QinLH0mVki+9fVxK/d1UWtvERglY5zdJoTqDG/osLuEs4icsHD122v6HUif48uAbp77DlZs1HjYl/q1vlpz1JA+emTuIN1+cwuEPv8VEdsh+s31g3/IdHcWvT+CPhXOIaNtQo3lYiWeQYRqKu+K7wCfwVnGLO4DJKDoVHohN2UlGhzXEtShWbpXt7+YAeYTCbysTk7m0/X3U71ryCdxv6NexPcNDgYMB+BcquyxQeCbDjAAAAABJRU5ErkJggg==)';
			break;
		case 'IOBJ':
			return 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAhCAYAAACr8emlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAQzSURBVFhH7ZZLbBtFGMf/3peziR/xIy4JwaIqIChn7r1xQ2o5wJEr4pAcEEgc6B0qoL1AkDhBQVURFTkkpSGNGkqCVEjblCgVQWlIHKeJ3TTxI/b6tXyzmca7jtdZL1WVA79oNDt/e8f/zMz3fePRCRxiBN4fWg69QddbnFpfR7FUguDxcGUXNl0mk0E4HEa1WuUqIEkSkskk+vr6UKlUuEorJAjI5/PoDoUQjUa5aoIZdMPmxqZeq9b4qE65XNbT6TQfWUmsrPAnK2RQz+VyfGTF9Rbfvn8d6cw6H9Wp1WqWlTNTKZf5kxX2ffZeM9wZpLmmEsM4O/4uF5xhPQzOcGVwanEUf6dnMftwAvdTq1w9GDeHvW2DpUoJY3MXoHhlPBt6EWcm3uGf7MIOvachcB4hiiJ/siKQbvdO21E8/dcVnPt1EE8F48Y4r2Xx+vODOPHCSWwXH4ACB9vb20ZEWqJYlpFYXkZ/PG45i+wfogCBPxBAJBLhap22Db7xxcs4EuuFCMkYFyt5PNP1EgZOfIoObweKWtEwGOvpQdV08CVapWUyGGcGTcaZwWw2a6ShAJlspK0tvjD1OdSgTOZkrgCq5MNcahrXl4YhSiIUxWv8GFsxr9e710TSRNpG1pt1mb6nKIrtFjs2mC/mcHXpWwSVGI3qi67TX8gXweU730ArFyhxtx93rTbR8WyXZoage6pNDSiCio3SPxj78yKtEPvcTbw2x5HBe+vz+D0xDq/UwRUrbBV7/E9jaPoDYyyK9SNgwS5SbXSGI4PXFn7EprYGWfRyZT8e3YPeaBxnR9+HXwhBK2koFAp7jUogaSWjN+uapqFIvetKkkjfw/jCdwh3xYyVakWXFMDt1ASm7v4MnTIJ+2FzY+YaNdaYSdcGh659CFXtpDJlvw1mJEXGvDaJji4vQnSjedRYngv4fEZv1oPd3cZNhkVzM1oaXEwuYG5rEj4lxJWDUZVOzCQmcHPpF67UMedFM2z17CK5pcFzkwPoDz5HG9t84mYIlCV1qYyrd3+gqmK91TjbAyu2BsfuXMSOvgVRsInIFvhpxf9IjmE+cZMr7mlqML+Tw2/Lo7bF3QlhfxSfjA/y0S50veVPVjxU7uxoWotHZr/G+ZmPcCTQf2Dk2sGCKl1exauBt/HaK2/h4c4GZCqDFUo1jbA8GKHLhaqqXKmzz2ChlMd735+ErlQgCwpX3VGt0Rmk2T879RNdqVoed1v2vTVy6zy2KmtUvuyTslNEQUSBbjuXZr7kSvvsM/jVjdNUtvpcb20jiuTFjZUrWNtc5kp7WAx+PDKAeOwY5SQ3CaE5rH6v5hYwvTjClfbYO4PzK7dw+vKb6FR8TGbSY0NHFZlcBmdODeNY73GuOmPPYCqTNCJNEKTHbG+XnVIWRyPH4VODXHFG21f+J4272H+C/G/wvwH8C7G2Tv4XjVuiAAAAAElFTkSuQmCC)';
			break;
		case 'MPRO':
			return 'url(data:image/png;base64,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)';
			break;
		case 'ISET':
			return 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAVnSURBVFhH7VdbiBtVGP7mlkk2l93Ebrt1LVWqrRZBim1xlYJXlII+FYooYrHuk4g+SfFJUbw8KSJoH6wgvvVdpeBDfVIsBS+IaNet0u3uNskm2UzmPuN3JpPspptNUrNL++CXfDnJycyZ7/zn///zHykkcANDjtsbFgNaMMDluUu4UrFRWXbhBTJsN4DjhvweIiAlibPlh6pI0BMyNAVIJoB8RsPEljTyN03EY10bugqcmZnF7//UMTtvoljzUCJz+XGosgy+KYa3iNsoiLo6EA3GD1lOQArG4FO87biw6iVsK+jYklVwx44M7r5tFLlxLbqnFzoEnjn7E86cK0LLbKMFJCiyFAliQz3ty/qCdoRhX0A59R4fkOFvDsDJUGtkbc8PYVH0aCpEKjXSMXbDXcbxqTdw765D0e+2D370xVl883OI9NhW6IrPPzyEgQvfc+G6XFbPuwb6FOEhkTWRyNicsAUtbULPmEjlLGTzNsa3BVCyAQyphIZcJktwVQOuUqfVvVhVS6Bv47eZItJJlYI8uHzAsPT9gGanI67DIKSvehkcKBzGPaOP4mDhSXgODSMpNPaK4zQFygq0hI7iwiwMo0YXkjmLgFYQpDX4wLVWWp+uaHlfLwShj1F9K547cAJP73sVx+57DY5jN314FeIlZresYSQ3wZmHFPo3loqXYdSrMBv16IF+KFG0xKhFX4rAEAaUIudtPqEbhEjLtWB6BrNC9wubAjmOEOE4DnsSSGXHya0cW2F/gHqtjEpxDpXSZdTK86iy7UVxXb1a7FiqbpAllf6eJEegczLdro+j2MP0m19BTY7xopWZtJPIqhtbEdkLEjTY/l9I3/UhQicrOrrC9iyUlheiMUO+to/tiKL4xf3v4MDtD0bXtKPYj/yMdFfouvQnQaaEFoWVHdvuSZv0xGr0ga4mMZm/FTfnd0atJLXltNHuEU4toq8ZEMOSQRIwSPpYWkBYrvXqhlUCGbEc3BVChyXHEcHWX15/xAIZnUKcmPmGsXeaGRSxQG4/jNZmkhXt8BRL3C+KB0GHD7b9ZwPoczwB4VkiTwzKCK2WaC+xGLApcHhGPsj9VNO5Dw9AqCJZ1yKKNOOxBmghzoM+Hp/+HKGaiSqX4SGSrgU9N8vqRY37ukNUNnu2q3jh6AMwLaYy38Gd2/ehwI1CoGOJmz64cRQTB7ezfgz4srnl2Y7JMszkpLhPxmhbcOqZT2nu7CCpqy9CVita8hKmjpyG3UgJg/aESys2TCZ2KjHcGl46+AGm9jwW/RdbUMGhvSlW0HWYDp1c+CPruf9MWs/zQrh2sklrLT32N+oyilcaqJZNuGaAlJpFWsvx2LBSabeX+P3Xj+GTl3ejoFVxaW4Ri0sOlhseTFucPZg6BEX6GIjNerBlOLEqV1MEwmRqN04d+QEfP/UdTh39Hg3DoBFXhTDRFihw+IlH8PVnr+Dcl8/ired34qG9MsbUMqpLiygtVbFQrGBukW25gWKFG33VQrlmd1D0LVZMfrciIesiFrlsm6haJdiWT2nC9zpv6npoWgs+eGER88UahRkolpexVDNhNBzWc8x5tJpIyqoqI6VrGM2MwJHmcV45CY1nkm4+6IUuJtRdOPHwSZ5fDGRTaRw/fT8kPcD0/nfb1cyAAq8dMwu/4u1vjyGnF+KeTghrKZ6OW9K7I7GarOOP2jm4MLuXWxsN2+5dbvG8CF+1ccE8j4vWL/iz8SMSibXH0E0TOAiESFVKxNSjnqtxXQUKrI7sbrjuAvvhf4HDYtMEiuzlh8yRTMYiIQ9Kcc/qzLdpAhOajoIyiVF1grvR4Myrk9C1ZDwKg2ezEvVG4Qb3QeBfFACYSeT/t6gAAAAASUVORK5CYII=)';
			break;
		case 'FBPA':
			return 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAATvSURBVFhHzVjfaxxVFP5mdndmfzWbpG3SSG0lLxXRaqX64IOKIKgg+POhUAXfREERfJC2KEJF8UFE8FH8A6oIxRakL1pKS4RWrChErNjY2CRNst3dZGdndn74nTszm83upLtQ3fRbDpl7554735xz7nfvRAsI3MK4CYJN2JYDu+nDcV3UqjXYjg/XCyATahqQSWnImikMbRlCOq3DzOgwsjne1dUM/aBvgp6zigu/zuDKUhMzc6uwfZPkAMv2EGhpZPMFkJMiFkNmDvwAlrWClBYgR7JGykPB8LBrPIfdYyb23j3JkZnQIQE3JujVcersJfz0Rw1Xr2sYGd0GXfOQ0jWSCRQZuSIN9VOh60RrjHjwJ8MCDQw0PF9DeXkBk+Np7N9TwkP77wwd2rAhwVM/XMCJ83WUSqPIpDWSkon96O5/B03T4XJap8lIVxdw8PEJ3HfPnujuBgS/OjmFc3+aKBXTwirqHQBIdrFcx0uPFvDAvrtUV0K1OpiabqCQ1eGx+D3PG5y5TQbFxHc/zkVckggyYpWlGV6k6BTQyR+ceVKX8vwrIReim6Dvo7RtNxZmf4dt1+Ez7FLQLvv/L5P5fS4Oa7WC5fnLKG3dFZFJIshF5DK1pe13wGlYKM/PoFaeJ28ffLnIArYZ3c4U9bBwjtA3nsdjX2VpFuVrfyuiW7buZDSpXxESCcpktmMjZRaRH5mAURhB9foCKstzqCqbR7U8R1EWDUxRPHRlfmyUkfg6vifjbLtBMvSnbzxPrbyAfGkH8sM7oKeprY6jSMfoXsWBhdc/Og09U6TmsckupUwUvVD9Qmhs12tL8F1H3esFeUzGzFHQh9V17BFqYzir9LEUMWxU8cGbT4Z9XQRh4dWj3yuCGtX/RhANW4dOnl3ua2Q2gkeCI+YKPnzrKdXuTjGfIil2/eQ6ajeXtbLOmh3Web8P2XLJUGo1RgJBqUFZ8rLCgoGb1F87wYQU23jx7eMIUlKDN07HzUBngedM7lQdcKmF2/Or+OSdZ1Q7cav79vQ0ZzC6SqoTDcflS2gwMqmopz9IGisrNk6c+YtHsPW+skjG8nV8euhZ1W4R/O3SNVyeX+EZTkcu2/1m6yGpCPDwvtspC02cvXi1L5LywvJSj9y/E3Ue0w4cOomhggRiLRSS5vFCA58deU61WwTf/+I8jp2pIm8kluU6SIXYto1fvnwM5y7O4eWPpzEiB4teII/Fio1j7+3F5G3DOHCYBIvrM9VkiieKDXz+7guq3WKTM1IoFdLcrPm3l3HcUIERY3oz6bCdOK7TZBwtw9O1ygJXtc+i89pM2j1WsbxPL0tC0rhOW4PkTWoxyXrKzKAgZJT+kVBssn1KfcfYNIJCQQmzEItEOiTbM8UDAnOsIkhdaU+v64annRibG0FZGBK1tkUSRnGTI6iWiywSElJ7flR/ykiwyf4Ym5dibqPhgSRcGLGtUMDHSmuiv3kpZgTD7xDKCo/STdbeYqWJrPMPd5FQpAUtglIT4iT12ctknFiI+GM8eWy7qXGxFy8a3DZqdRcz3GIblVm88fQopr4+zO+1fDSqjaDk3bIsWqMvazRs9RT58rP47VJPGLORyf9v5GxY1JbxxL0ZfHP0Qfx8/Ahee+X5iM0aWntxrEN9nN4VxMswDHUh3xFyfOoHIiGmKX5cqfxO6YXE49atA+BfRjn1KA0DK9YAAAAASUVORK5CYII=)';
			break;
		default:
			return 'circle';
	}

}

function getIndexOfK(arr, k) {
	for (var x = 0; x < arr.length; x++) {
		if (arr[x][0] === k) {
			return arr[x][1];
			break;
		}
	}
}	

function getUniqueListBy(arr, key) {
	return [...new Map(arr.map(item => [item[key], item])).values()]
}
	
function addStyle(styles, root) {
             
	/* Create style document */
	var css = document.createElement('style');
	css.type = 'text/css';
 
	if (css.styleSheet)
		css.styleSheet.cssText = styles;
	else
		css.appendChild(document.createTextNode(styles));
	 
	/* Append style to the root */
	root.appendChild(css);
}

var styles = '		.highcharts-container { \
		height: 100% !important; \
		width: 100% !important; \
		padding: 0px; \
	} \
	\
	.highcharts-credits { \
	  display: none; \
	} \
	\
	.highcharts-label span{ \
		padding: 1em 0; \
		font-size: 1.2em; \
		color: #555; \
		text-shadow: 0 0 3px rgba(255,255,255,1) ; \
		font-family: Lucida Sans Unicode ; \
	}';
 


(function() {
	
	let template = document.createElement("template");
    template.innerHTML = `
		<div id="container" style= "width:100% height:100%">
  		</div>
		`;
	
    class NetworkGraph extends HTMLElement {
        constructor() {
            super();

            let shadowRoot = this.attachShadow({
                mode: "open"
            });
						
            shadowRoot.appendChild(template.content.cloneNode(true));
            this.addEventListener("click", event => {
                var event = new Event("onClick");
                this.dispatchEvent(event);
            });    
			
			addStyle(styles, shadowRoot);
            this._firstUpdate = true;
            this._props = {};
            // this._firstConnection = false;
        }
       
         //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            // this._firstConnection = true;
            // this.loadAmchartLibraires();           
        }

        //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props,
                ...changedProperties
            };
        }

        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        
        }

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
        onCustomWidgetAfterUpdate(changedProperties) {

			this._props = { ...this._props, ...changedProperties };
			if ("Data" in changedProperties) {
				this.$Data = changedProperties["Data"];
			}
			if ("Title" in changedProperties) {
				this.$Title = changedProperties["Title"];
			}
						
			this.renderNetwork(this.$Data, this.$Title);  

        }
		
        async renderNetwork(txtData, chtitle){
			
			if (this._firstUpdate) {
				await getScriptPromisify("https://code.highcharts.com/highcharts.js");
				await getScriptPromisify("https://code.highcharts.com/modules/networkgraph.js");
				this._firstUpdate = false;
			}
			
			var cdiv = this.shadowRoot.getElementById('container');
			console.log(txtData);
			var jsonify = JSON.parse(txtData);
			//console.log("json: "+typeof jsonify);
			var chdata = {};
			if (typeof jsonify === 'object'){
				chdata = jsonify;
			} else {
				chdata = JSON.parse(jsonify);
			}
			//console.log("chdata: "+typeof chdata);
			Highcharts.addEvent(
				Highcharts.Series,
				"afterSetOptions",
				function (e) {
					//console.log(colors);
					var nodes = {};
					var allNodes = [];
					var selfLoop = [];

					if (
						this instanceof Highcharts.Series.types.networkgraph &&
						e.options.id === "lang-tree"
					) {
						
						Object.values(chdata).forEach(function (link) {
						
							//console.log(link);
							if(link[6] === "LOOK_UP"){
								link[7] = "dash";
							}
							
							var from = {'0': link[0] , '1':link[3]};
							var to = {'0': link[1] , '1':link[4]};
							allNodes.push(to);
							allNodes.push(from);
							if(link[0] === link[1]){
								selfLoop.push({'0': link[1] , '1':link[1]+" \u21BB"});
							}
							
						});
						//console.log(allNodes);
						// console.log(selfLoop);

						var uniqNodes = getUniqueListBy(allNodes, '0')
						//console.log(uniqNodes);
				
						uniqNodes.forEach(function (node,index){
						
							if (node[index] === chtitle) {
							nodes[index] = {
								id: node[0],
								marker: {
									radius: 25,
									symbol: getIcon(node[1]),
									
								},
								dataLabels: {
									enabled: true,
									useHTML: true,
									style: {
										fontSize: "14px",
									},
									allowOverlap: true,
									shadow: true
								},
								color: "#10069f",
								name: getIndexOfK(selfLoop, node[0])
							};
							} else {
								nodes[index] = {
									id: node[0],
									marker: {
										radius: 20,
										lineColor:"#008000",
										lineWidth: 0,
										symbol: getIcon(node[1]),
										
									},
									dataLabels: {
										enabled: true,
										useHTML: true,
										style: {
											fontSize: "12px"
										},
										allowOverlap: true
									},
									color: "#00A3E0",
									name: getIndexOfK(selfLoop, node[0]),
								}
							}					
						});
						//console.log(nodes);
						e.options.nodes = Object.keys(nodes).map(function (id) {
							return nodes[id];
						});
					}
			});
			
			var network = Highcharts.chart(cdiv, {
							chart: {
								type: "networkgraph",
								renderTo: 'chart',
								margin: 0
							},
							title: {
								text: "", // iprov,
								align: "left"
							},
							subtitle: {
								//text: "A Force-Directed Network Graph in Highcharts",
								align: "left"
							},
							plotOptions: {
								networkgraph: {
									keys: ["from", "to", "level", "ch_type", "p_type", "extra", "rel_type","dashStyle"],
									turboThreshold: 0.95,
									layoutAlgorithm: {
										enableSimulation: false,
										//approximation: "barnes-hut",
										//friction: -0.35,
										linkLength: 32,
										//initialPositions: 'random',
										//integration: 'euler', 
										//integration: 'verlet',
										// Half of the repulsive force
										gravitationalConstant: 0.01
									}
								}
							},
							series: [{
								accessibility: {
									enabled: false
								},
								draggable: true,
								dataLabels: {
									enabled: true,
									linkTextPath: {
										attributes: {
											dy: -3
										}
									},
									style: {
										fontSize: "12px"
									},
									// linkFormat: "{point.fromNode.name} \u2192 {point.toNode.name}"+"{point.txt}" + "{point.fromNode.name} \u2190 {point.toNode.name}",
									// linkFormat: "{point.toNode.name} ",
									textPath: {
										enabled: true
									}, 
									//linkFormat: "{point.level}",
									linkFormat: "",
									//format: "Node",
									allowOverlap: true
								},
								link:{
									//color: "#0000f0",
									width: 1.3,
									dashStyle: "{point.dashStyle}",
								},
								id: "lang-tree",
								allowPointSelect: true,
								tooltip: {
									distance:1000,
									useHTML: true,
									headerFormat: "",
									display: "none",
									enabled: false,
									hideDelay: 0,
								},
								point: {
									events: {
										select: function () {
											var sel = this.id;
											console.log(this);
										}
									}
								},
								marker: {
									radius: 20
								}, 
								data: chdata
							}]
						});
			
			(function(H) {
			  H.wrap(H.seriesTypes.networkgraph.prototype.pointClass.prototype, 'getLinkPath', function(p) {
				var left = this.toNode,
				  right = this.fromNode;

				var angle = Math.atan((left.plotX - right.plotX) /
				  (left.plotY - right.plotY));
				//console.log(angle);

				if (angle) {
				  let path = ['M', left.plotX, left.plotY, right.plotX, right.plotY],
					lastPoint = left,
					nextLastPoint = right,
					pointRadius = 50,
					arrowLength = 5,
					arrowWidth = 5;

				  if (left.plotY < right.plotY) {
					path.push(
					  nextLastPoint.plotX - pointRadius * Math.sin(angle),
					  nextLastPoint.plotY - pointRadius * Math.cos(angle),
					);
					path.push(
					  nextLastPoint.plotX - pointRadius * Math.sin(angle) - arrowLength * Math.sin(angle) - arrowWidth * Math.cos(angle),
					  nextLastPoint.plotY - pointRadius * Math.cos(angle) - arrowLength * Math.cos(angle) + arrowWidth * Math.sin(angle),
					);

					path.push(
					  nextLastPoint.plotX - pointRadius * Math.sin(angle),
					  nextLastPoint.plotY - pointRadius * Math.cos(angle),
					);
					path.push(
					  nextLastPoint.plotX - pointRadius * Math.sin(angle) - arrowLength * Math.sin(angle) + arrowWidth * Math.cos(angle),
					  nextLastPoint.plotY - pointRadius * Math.cos(angle) - arrowLength * Math.cos(angle) - arrowWidth * Math.sin(angle),
					);


				  } else {
					path.push(
					  nextLastPoint.plotX + pointRadius * Math.sin(angle),
					  nextLastPoint.plotY + pointRadius * Math.cos(angle),
					);
					path.push(
					  nextLastPoint.plotX + pointRadius * Math.sin(angle) + arrowLength * Math.sin(angle) - arrowWidth * Math.cos(angle),
					  nextLastPoint.plotY + pointRadius * Math.cos(angle) + arrowLength * Math.cos(angle) + arrowWidth * Math.sin(angle),
					);
					path.push(
					  nextLastPoint.plotX + pointRadius * Math.sin(angle),
					  nextLastPoint.plotY + pointRadius * Math.cos(angle),
					);
					path.push(
					  nextLastPoint.plotX + pointRadius * Math.sin(angle) + arrowLength * Math.sin(angle) + arrowWidth * Math.cos(angle),
					  nextLastPoint.plotY + pointRadius * Math.cos(angle) + arrowLength * Math.cos(angle) - arrowWidth * Math.sin(angle),
					);

				  }
					//console.log(path);
				  return path
				}
				return [
				  ['M', left.plotX || 0, left.plotY || 0],
				  ['L', right.plotX || 0, right.plotY || 0],
				];
			  });
			}(Highcharts));
        }
    }
    customElements.define("com-asml-network", NetworkGraph);
})();
